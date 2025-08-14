import Airtable from 'airtable';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    console.log('=== QUIZ SUBMISSION START ===');
    
    // Check environment variables
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    
    console.log('Environment check:', {
      hasApiKey: !!apiKey,
      hasBaseId: !!baseId,
      nodeEnv: process.env.NODE_ENV
    });

    if (!apiKey || !baseId) {
      console.error('Missing environment variables');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error',
        details: {
          hasApiKey: !!apiKey,
          hasBaseId: !!baseId
        }
      });
    }

    // Initialize Airtable
    const base = new Airtable({ apiKey }).base(baseId);
    
    // Get request data
    const { name, email, phone, location, questions } = req.body;
    
    console.log('Request data:', {
      name: name?.substring(0, 10) + '...',
      email: email?.substring(0, 10) + '...',
      hasPhone: !!phone,
      hasLocation: !!location,
      hasQuestions: !!questions
    });

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Name and email are required'
      });
    }

    // Prepare record
    const record = {
      'Name': String(name).trim(),
      'Email': String(email).trim(),
      'Phone': phone || '',
      'Location': location || '',
      'Status': 'New',
      'Created At': new Date().toISOString(),
      'Questions and Answers': typeof questions === 'string' ? questions : JSON.stringify(questions || {}),
      'IP Address': req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown',
      'User Agent': req.headers['user-agent'] || 'unknown'
    };

    console.log('Creating Airtable record...');
    
    // Create record
    const result = await base('Quiz Submissions').create([{ fields: record }]);
    
    console.log('SUCCESS! Record created:', result[0].id);
    
    return res.status(201).json({
      success: true,
      message: 'Quiz submitted successfully',
      recordId: result[0].id,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('=== QUIZ SUBMISSION ERROR ===');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Error details:', error);

    return res.status(500).json({
      success: false,
      error: 'Quiz submission failed',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
} 