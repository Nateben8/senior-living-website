export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('🚀 Simple quiz submission started');
    
    // Check environment variables
    if (!process.env.AIRTABLE_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'AIRTABLE_API_KEY missing from environment'
      });
    }

    if (!process.env.AIRTABLE_BASE_ID) {
      return res.status(500).json({
        success: false,
        error: 'AIRTABLE_BASE_ID missing from environment'
      });
    }

    // Import Airtable dynamically
    const Airtable = await import('airtable');
    const base = new Airtable.default({
      apiKey: process.env.AIRTABLE_API_KEY
    }).base(process.env.AIRTABLE_BASE_ID);

    // Get request data
    const { name, email, phone, location, questions } = req.body;
    
    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        error: 'Name and email are required'
      });
    }

    // Create record with minimal fields
    const fields = {
      'Name': String(name).trim(),
      'Email': String(email).trim(),
      'Phone': phone || '',
      'Location': location || '',
      'Status': 'New',
      'Created At': new Date().toISOString(),
      'Questions and Answers': typeof questions === 'string' ? questions : JSON.stringify(questions || {}),
      'IP Address': req.headers['x-forwarded-for'] || 'unknown',
      'User Agent': req.headers['user-agent'] || 'unknown'
    };
    
    console.log('📄 Creating record with fields:', JSON.stringify(fields, null, 2));
    
    const record = await base('Quiz Submissions').create([{ fields: fields }]);
    
    console.log('🎉 SUCCESS! Record created:', record[0].id);
    
    res.status(201).json({ 
      success: true, 
      message: 'Quiz submitted successfully',
      recordId: record[0].id,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('💥 Quiz submission failed:', error);
    
    res.status(500).json({ 
      success: false,
      error: error.message,
      details: 'Check server logs for more information'
    });
  }
} 