const express = require('express');
const cors = require('cors');
const Airtable = require('airtable');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Airtable
const base = new Airtable({ 
  apiKey: 'patEmDz9bthruzpR7.3fbdf686d7cda89fa5556715ea121bf6621985cff678a4b23f1f5fc73f578a31' 
}).base('appkG1v7qlXS1ZfOV');

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, careType, urgency, message, source } = req.body;
    
    // Only include fields that don't have select restrictions
    const fields = {
      'Name': name,
      'Email': email,
      'Phone': phone || '',
      'Message': message,
      'Status': 'New',
      'Created At': new Date().toISOString(),
      'IP Address': req.ip || req.connection.remoteAddress || '',
      'User Agent': req.get('User-Agent') || '',
    };

    const record = await base('Contact Submissions').create([
      {
        fields: fields
      }
    ]);
    
    console.log('Contact submitted to Airtable:', record[0].id);
    res.status(201).json({ success: true, message: 'Contact submitted successfully' });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit contact' });
  }
});

// Quiz form submission
app.post('/api/quiz', async (req, res) => {
  console.log('Received quiz request');
  console.log('Request body:', req.body);
  
  try {
    const { name, email, phone, location, careType, budget, timeline, urgency, source, questions } = req.body;
    
    console.log('Received quiz submission:', { name, email, location, careType, budget, timeline, urgency });
    
    // Format the questions and answers nicely
    let formattedQuestions = '';
    if (questions) {
      try {
        const parsedQuestions = JSON.parse(questions);
        formattedQuestions = Object.entries(parsedQuestions)
          .filter(([key, value]) => value && key !== 'contactInfo')
          .map(([key, value]) => {
            const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            if (Array.isArray(value)) {
              return `${formattedKey}: ${value.join(', ')}`;
            } else if (typeof value === 'object') {
              return `${formattedKey}: ${JSON.stringify(value)}`;
            } else {
              return `${formattedKey}: ${value}`;
            }
          })
          .join('\n\n');
      } catch (error) {
        formattedQuestions = questions;
      }
    }

    // Only include fields that don't have select restrictions
    const fields = {
      'Name': name,
      'Email': email,
      'Phone': phone || '',
      'Location': location || '',
      'Status': 'New',
      'Created At': new Date().toISOString(),
      'IP Address': req.ip || req.connection.remoteAddress || '',
      'User Agent': req.get('User-Agent') || '',
      'Questions and Answers': formattedQuestions,
    };

    const record = await base('Quiz Submissions').create([
      {
        fields: fields
      }
    ]);
    
    console.log('Quiz submitted to Airtable:', record[0].id);
    res.status(201).json({ success: true, message: 'Quiz submitted successfully' });
  } catch (error) {
    console.error('Quiz submission error:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit quiz', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Simple server running on http://localhost:${PORT}`);
  console.log('Ready to handle form submissions to Airtable!');
});

// Add error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
}); 