# Database Setup Guide - Contact & Quiz Submissions

This guide will help you set up and access the database for contact form submissions and quiz submissions with Airtable integration.

## 🗄️ Database Overview

The database includes the following tables:
- **contact_submissions** - Contact form submissions with Airtable sync
- **quiz_submissions** - Quiz/assessment submissions with detailed question tracking and Airtable sync

## 🚀 Quick Setup

### 1. Set Up Neon Database (Recommended)

1. Go to [Neon](https://neon.tech) and create a free account
2. Create a new project
3. Copy your database connection string
4. Create a `.env` file in your project root:

```bash
DATABASE_URL="postgresql://username:password@host:port/database"
PORT=3001
AIRTABLE_API_KEY="your_airtable_api_key"
AIRTABLE_BASE_ID="your_airtable_base_id"
```

### 2. Set Up Airtable

1. Go to [Airtable](https://airtable.com) and create a new base
2. Create two tables:
   - **Contact Submissions**
   - **Quiz Submissions**

3. **Contact Submissions Table Fields:**
   - Name (Single line text)
   - Email (Email)
   - Phone (Phone number)
   - Message (Long text)
   - Source (Single line text)
   - IP Address (Single line text)
   - User Agent (Long text)
   - Created At (Date)
   - Status (Single select: New, Processed)
   - Notes (Long text)

4. **Quiz Submissions Table Fields:**
   - Name (Single line text)
   - Email (Email)
   - Phone (Phone number)
   - Location (Single line text)
   - Care Type (Single line text)
   - Budget (Single line text)
   - Timeline (Single line text)
   - Urgency (Single line text)
   - Source (Single line text)
   - Questions and Answers (Long text)
   - IP Address (Single line text)
   - User Agent (Long text)
   - Created At (Date)
   - Status (Single select: New, Processed)
   - Notes (Long text)

5. Get your Airtable API key and Base ID:
   - API Key: Go to your account settings → API → Generate API key
   - Base ID: Found in the URL when viewing your base

### 3. Install Dependencies

```bash
npm install
```

### 4. Generate and Push Database Schema

```bash
# Generate migration files
npm run db:generate

# Push schema to database
npm run db:push
```

### 5. Start the Server

```bash
# Development mode
npm run server:dev

# Production mode
npm run build
npm run server:start
```

## 📊 Database Tables

### Contact Submissions
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  source VARCHAR(100),
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  is_processed BOOLEAN DEFAULT FALSE,
  notes TEXT,
  airtable_record_id VARCHAR(100)
);
```

### Quiz Submissions
```sql
CREATE TABLE quiz_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  location VARCHAR(255),
  questions JSONB NOT NULL, -- Array of {question: string, answer: string}
  care_type VARCHAR(100),
  budget VARCHAR(100),
  timeline VARCHAR(100),
  urgency VARCHAR(100),
  source VARCHAR(100),
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  is_processed BOOLEAN DEFAULT FALSE,
  notes TEXT,
  airtable_record_id VARCHAR(100)
);
```

## 🔌 API Endpoints

### Submit Forms
- `POST /api/contact` - Contact form submissions
- `POST /api/quiz` - Quiz/assessment submissions

### Retrieve Data (Admin Access)
- `GET /api/submissions/contact` - Get all contact submissions
- `GET /api/submissions/quiz` - Get all quiz submissions

### Update Status
- `PUT /api/submissions/contact/:id/status` - Update contact submission status
- `PUT /api/submissions/quiz/:id/status` - Update quiz submission status

### Health Check
- `GET /api/health` - Server health check

## 📱 Frontend Integration

### Contact Form Example
```javascript
const submitContactForm = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        source: 'contact-page'
      })
    });
    
    const result = await response.json();
    if (result.success) {
      console.log('Contact form submitted successfully');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
```

### Quiz Form Example
```javascript
const submitQuizForm = async (formData) => {
  try {
    const response = await fetch('/api/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        questions: formData.questions, // Array of {question: string, answer: string}
        careType: formData.careType,
        budget: formData.budget,
        timeline: formData.timeline,
        urgency: formData.urgency,
        source: 'quiz-page'
      })
    });
    
    const result = await response.json();
    if (result.success) {
      console.log('Quiz submitted successfully');
    }
  } catch (error) {
    console.error('Error submitting quiz:', error);
  }
};
```

## 🔍 Accessing Your Data

### 1. Admin Dashboard (Easiest)
- Visit: `http://localhost:3000/admin`
- View all submissions in organized tables
- Track processing status
- View detailed quiz questions and answers
- Mark submissions as processed

### 2. Via API
```bash
# Get all contact submissions
curl http://localhost:3001/api/submissions/contact

# Get all quiz submissions
curl http://localhost:3001/api/submissions/quiz

# Update submission status
curl -X PUT http://localhost:3001/api/submissions/contact/123/status \
  -H "Content-Type: application/json" \
  -d '{"isProcessed": true, "notes": "Contacted client"}'
```

### 3. Via Database Directly
```sql
-- View all contact submissions
SELECT * FROM contact_submissions ORDER BY created_at DESC;

-- View unprocessed submissions
SELECT * FROM contact_submissions WHERE is_processed = false;

-- View quiz submissions with questions
SELECT name, email, questions FROM quiz_submissions;

-- Count submissions by source
SELECT source, COUNT(*) as count 
FROM contact_submissions 
GROUP BY source;
```

### 4. Via Airtable
- **Contact Submissions**: View in your Airtable base
- **Quiz Submissions**: View in your Airtable base with formatted Q&A
- **Real-time Sync**: All submissions automatically sync to Airtable

## 📈 Analytics Queries

### Popular Sources
```sql
SELECT source, COUNT(*) as submissions
FROM contact_submissions
GROUP BY source
ORDER BY submissions DESC;
```

### Quiz Completion Rates
```sql
SELECT 
  care_type,
  COUNT(*) as total_submissions,
  COUNT(CASE WHEN is_processed = true THEN 1 END) as processed
FROM quiz_submissions
GROUP BY care_type;
```

### Daily Submissions
```sql
SELECT DATE(created_at) as date, COUNT(*) as submissions
FROM contact_submissions
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

### Quiz Questions Analysis
```sql
-- Extract specific answers from JSON questions
SELECT 
  name,
  email,
  questions->0->>'answer' as first_answer,
  questions->1->>'answer' as second_answer
FROM quiz_submissions
WHERE questions IS NOT NULL;
```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check your `DATABASE_URL` in `.env`
   - Ensure your database is running
   - Verify network connectivity

2. **Airtable Sync Issues**
   - Verify `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID` in `.env`
   - Check Airtable table field names match exactly
   - Ensure API key has write permissions

3. **Migration Errors**
   ```bash
   # Reset and regenerate migrations
   rm -rf drizzle
   npm run db:generate
   npm run db:push
   ```

4. **Server Won't Start**
   - Check if port 3001 is available
   - Verify all dependencies are installed
   - Check console for error messages

### Environment Variables
Make sure these are set in your `.env` file:
```bash
DATABASE_URL="your-database-connection-string"
PORT=3001
AIRTABLE_API_KEY="your_airtable_api_key"
AIRTABLE_BASE_ID="your_airtable_base_id"
```

## 🚀 Deployment

### Vercel Deployment
1. Add environment variables in Vercel dashboard
2. Deploy your application
3. The API endpoints will be available at `https://your-domain.vercel.app/api/*`

### Local Development
```bash
# Start both frontend and backend
npm run dev          # Frontend (port 3000)
npm run server:dev   # Backend (port 3001)
```

## 📞 Support

If you encounter any issues:
1. Check the console logs for error messages
2. Verify your database connection
3. Ensure all environment variables are set correctly
4. Test API endpoints with tools like Postman or curl
5. Check Airtable sync status in the admin dashboard

Your database is now ready to capture and store contact form submissions and quiz submissions with detailed question tracking, all synced to Airtable for easy management! 