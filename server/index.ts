import express from 'express';
import cors from 'cors';
import { db } from './db';
import { contactSubmissions, quizSubmissions } from './db/schema';
import { AirtableService } from './services/airtable';
import { eq } from 'drizzle-orm';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to get client IP
const getClientIP = (req: express.Request): string => {
  return req.ip || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress || 
         (req.connection.socket ? req.connection.socket.remoteAddress : '') || 
         'unknown';
};

// Helper function to get user agent
const getUserAgent = (req: express.Request): string => {
  return req.get('User-Agent') || 'unknown';
};

// Contact Form Submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, careType, urgency, message, source } = req.body;
    
    // Save to database
    const submission = await db.insert(contactSubmissions).values({
      name,
      email,
      phone,
      careType,
      urgency,
      message,
      source,
      ipAddress: getClientIP(req),
      userAgent: getUserAgent(req),
    }).returning();

    // Sync to Airtable
    const airtableRecordId = await AirtableService.syncContactSubmission({
      ...submission[0],
      createdAt: submission[0].createdAt.toISOString()
    });

    // Update database with Airtable record ID
    if (airtableRecordId) {
      await db.update(contactSubmissions)
        .set({ airtableRecordId })
        .where(eq(contactSubmissions.id, submission[0].id));
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: submission[0]
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form'
    });
  }
});

// Quiz/Assessment Submission
app.post('/api/quiz', async (req, res) => {
  try {
    const { 
      name, 
      email, 
      phone, 
      location, 
      questions,
      careType,
      budget,
      timeline,
      urgency,
      source 
    } = req.body;
    
    // Save to database
    const submission = await db.insert(quizSubmissions).values({
      name,
      email,
      phone,
      location,
      questions,
      careType,
      budget,
      timeline,
      urgency,
      source,
      ipAddress: getClientIP(req),
      userAgent: getUserAgent(req),
    }).returning();

    // Sync to Airtable
    const airtableRecordId = await AirtableService.syncQuizSubmission({
      ...submission[0],
      createdAt: submission[0].createdAt.toISOString()
    });

    // Update database with Airtable record ID
    if (airtableRecordId) {
      await db.update(quizSubmissions)
        .set({ airtableRecordId })
        .where(eq(quizSubmissions.id, submission[0].id));
    }

    res.status(201).json({
      success: true,
      message: 'Quiz submitted successfully',
      data: submission[0]
    });
  } catch (error) {
    console.error('Quiz submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit quiz'
    });
  }
});

// GET endpoints for retrieving submissions (admin access)
app.get('/api/submissions/contact', async (req, res) => {
  try {
    const submissions = await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
    res.json({ success: true, data: submissions });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch submissions' });
  }
});

app.get('/api/submissions/quiz', async (req, res) => {
  try {
    const submissions = await db.select().from(quizSubmissions).orderBy(quizSubmissions.createdAt);
    res.json({ success: true, data: submissions });
  } catch (error) {
    console.error('Error fetching quiz submissions:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch submissions' });
  }
});

// Update submission status
app.put('/api/submissions/:type/:id/status', async (req, res) => {
  try {
    const { type, id } = req.params;
    const { isProcessed, notes } = req.body;

    if (type === 'contact') {
      await db.update(contactSubmissions)
        .set({ isProcessed, notes })
        .where(eq(contactSubmissions.id, id));
    } else if (type === 'quiz') {
      await db.update(quizSubmissions)
        .set({ isProcessed, notes })
        .where(eq(quizSubmissions.id, id));
    }

    res.json({ success: true, message: 'Status updated successfully' });
  } catch (error) {
    console.error('Error updating submission status:', error);
    res.status(500).json({ success: false, message: 'Failed to update status' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 