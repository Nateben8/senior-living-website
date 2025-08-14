import Airtable from 'airtable';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check environment variables
    if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
      return res.status(500).json({
        success: false,
        error: 'Server configuration error',
        hasKey: !!process.env.AIRTABLE_API_KEY,
        hasBase: !!process.env.AIRTABLE_BASE_ID
      });
    }

    // Initialize Airtable
    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY
    }).base(process.env.AIRTABLE_BASE_ID);

    // Get data from request
    const { name, email, phone, location, questions } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Name and email are required'
      });
    }

    // Create Airtable record
    const record = await base('Quiz Submissions').create([{
      fields: {
        'Name': name,
        'Email': email,
        'Phone': phone || '',
        'Location': location || '',
        'Status': 'New',
        'Created At': new Date().toISOString(),
        'Questions and Answers': typeof questions === 'string' ? questions : JSON.stringify(questions || {}),
        'IP Address': req.headers['x-forwarded-for'] || 'unknown',
        'User Agent': req.headers['user-agent'] || 'unknown'
      }
    }]);

    return res.status(201).json({
      success: true,
      message: 'Quiz submitted successfully',
      recordId: record[0].id
    });

  } catch (error) {
    console.error('Quiz submission error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to submit quiz',
      details: error.message
    });
  }
} 