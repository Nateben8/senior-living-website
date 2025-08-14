const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Quiz submission received:', JSON.stringify(req.body, null, 2));
    
    const { name, email, phone, location, careType, budget, timeline, urgency, source, questions } = req.body;
    
    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and email are required fields' 
      });
    }
    
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

    // Use the original field names that work with your Airtable
    const fields = {
      'Name': name,
      'Email': email,
      'Phone': phone || '',
      'Location': location || '',
      'Status': 'New',
      'Created At': new Date().toISOString(),
      'Questions and Answers': formattedQuestions,
      'IP Address': req.headers['x-forwarded-for'] || req.connection?.remoteAddress || '',
      'User Agent': req.headers['user-agent'] || ''
    };
    
    console.log('Attempting to create record with fields:', JSON.stringify(fields, null, 2));
    
    // Try to create the record
    const record = await base('Quiz Submissions').create([
      { fields: fields }
    ]);
    
    console.log('Quiz submitted to Airtable successfully:', record[0].id);
    res.status(201).json({ 
      success: true, 
      message: 'Quiz submitted successfully',
      recordId: record[0].id 
    });
    
  } catch (error) {
    console.error('Quiz submission error:', error.message);
    console.error('Full error details:', JSON.stringify(error, null, 2));
    
    // Check for specific Airtable errors
    let errorMessage = 'Failed to submit quiz';
    if (error.message.includes('INVALID_REQUEST_MISSING_FIELDS')) {
      errorMessage = 'Missing required fields in submission';
    } else if (error.message.includes('INVALID_REQUEST_UNKNOWN_FIELD') || error.message.includes('Unknown field name')) {
      errorMessage = 'Database field mismatch - please contact support';
    } else if (error.message.includes('NOT_FOUND')) {
      errorMessage = 'Database table not found - please contact support';
    } else if (error.statusCode === 422) {
      errorMessage = 'Invalid data format - please check your input';
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage,
      error: error.message,
      statusCode: error.statusCode || 500
    });
  }
} 