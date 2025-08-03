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
    
    const record = await base('Contact Submissions').create([
      {
        fields: {
          'Name': name,
          'Email': email,
          'Phone': phone || '',
          'Care Type': careType || '',
          'Urgency': urgency || '',
          'Message': message,
          'Source': source || 'contact-page',
          'Status': 'New',
          'Created At': new Date().toISOString(),
        }
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
  try {
    const { name, email, phone, location, careType, budget, timeline, urgency, source, questions } = req.body;
    
    console.log('Received quiz submission:', { name, email, location, careType, budget, timeline, urgency });
    
    const record = await base('Quiz Submissions').create([
      {
        fields: {
          'Name': name,
          'Email': email,
          'Phone': phone || '',
          'Location': location || '',
          'Status': 'New',
          'Created At': new Date().toISOString(),
          'Questions and Answers': questions || '',
        }
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