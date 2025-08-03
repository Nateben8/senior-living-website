import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

export default async function handler(req, res) {
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
    const { name, email, phone, location, careType, budget, timeline, urgency, source, questions } = req.body;
    
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

    // Only include fields that don't have select restrictions to avoid Airtable errors
    const fields = {
      'Name': name,
      'Email': email,
      'Phone': phone || '',
      'Location': location || '',
      'Status': 'New',
      'Created At': new Date().toISOString(),
      'IP Address': req.headers['x-forwarded-for'] || req.connection?.remoteAddress || '',
      'User Agent': req.headers['user-agent'] || '',
      'Questions and Answers': formattedQuestions,
    };
    
    const record = await base('Quiz Submissions').create([
      { fields: fields }
    ]);
    
    console.log('Quiz submitted to Airtable:', record[0].id);
    res.status(201).json({ success: true, message: 'Quiz submitted successfully' });
  } catch (error) {
    console.error('Quiz submission error:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit quiz', error: error.message });
  }
} 