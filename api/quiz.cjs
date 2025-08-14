const Airtable = require('airtable');

module.exports = async function handler(req, res) {
  // Enable CORS for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST method
  if (req.method !== 'POST') {
    console.log(`❌ Method ${req.method} not allowed`);
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed',
      method: req.method 
    });
  }

  try {
    console.log('🚀 Quiz submission started');
    console.log('📝 Request body:', JSON.stringify(req.body, null, 2));
    console.log('🔑 Environment check:');
    console.log('  - AIRTABLE_API_KEY exists:', !!process.env.AIRTABLE_API_KEY);
    console.log('  - AIRTABLE_BASE_ID exists:', !!process.env.AIRTABLE_BASE_ID);

    // Check if environment variables exist
    if (!process.env.AIRTABLE_API_KEY) {
      console.error('❌ AIRTABLE_API_KEY missing');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: Missing API key',
        details: 'Environment variables not properly configured'
      });
    }

    if (!process.env.AIRTABLE_BASE_ID) {
      console.error('❌ AIRTABLE_BASE_ID missing');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: Missing base ID',
        details: 'Environment variables not properly configured'
      });
    }

    // Initialize Airtable
    console.log('🔌 Initializing Airtable connection...');
    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY
    }).base(process.env.AIRTABLE_BASE_ID);

    // Extract and validate request data
    const { name, email, phone, location, careType, budget, timeline, urgency, source, questions } = req.body;
    
    console.log('✅ Extracted data:');
    console.log('  - Name:', name);
    console.log('  - Email:', email);
    console.log('  - Phone:', phone);
    console.log('  - Location:', location);

    // Validate required fields
    if (!name || name.trim().length === 0) {
      console.error('❌ Name is required');
      return res.status(400).json({ 
        success: false, 
        error: 'Name is required',
        field: 'name'
      });
    }

    if (!email || email.trim().length === 0) {
      console.error('❌ Email is required');
      return res.status(400).json({ 
        success: false, 
        error: 'Email is required',
        field: 'email'
      });
    }

    // Format questions data
    let formattedQuestions = '';
    if (questions) {
      try {
        console.log('📋 Processing questions...');
        const parsedQuestions = typeof questions === 'string' ? JSON.parse(questions) : questions;
        
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
          
        console.log('✅ Questions formatted successfully');
      } catch (error) {
        console.warn('⚠️ Questions parsing failed, using raw data:', error.message);
        formattedQuestions = String(questions);
      }
    }

    // Prepare record fields with safe defaults
    const fields = {
      'Name': String(name).trim(),
      'Email': String(email).trim(),
      'Phone': phone ? String(phone).trim() : '',
      'Location': location ? String(location).trim() : '',
      'Status': 'New',
      'Created At': new Date().toISOString(),
      'Questions and Answers': formattedQuestions,
      'IP Address': req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection?.remoteAddress || 'unknown',
      'User Agent': req.headers['user-agent'] || 'unknown'
    };
    
    console.log('📄 Record fields prepared:');
    console.log(JSON.stringify(fields, null, 2));

    // Attempt to create the record
    console.log('💾 Creating Airtable record...');
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
    console.error('📊 Error details:', {
      message: error.message,
      type: error.type,
      statusCode: error.statusCode,
      stack: error.stack
    });

    // Determine specific error response
    let errorResponse = {
      success: false,
      error: 'Unknown error occurred',
      timestamp: new Date().toISOString()
    };

    if (error.message.includes('INVALID_REQUEST_MISSING_FIELDS')) {
      errorResponse.error = 'Missing required fields';
      errorResponse.details = 'Please fill in all required information';
    } else if (error.message.includes('INVALID_REQUEST_UNKNOWN_FIELD') || error.message.includes('Unknown field name')) {
      errorResponse.error = 'Database field configuration error';
      errorResponse.details = 'Please contact support - there is a field mismatch';
    } else if (error.message.includes('NOT_FOUND') || error.statusCode === 404) {
      errorResponse.error = 'Database table not found';
      errorResponse.details = 'Please contact support - database configuration issue';
    } else if (error.message.includes('AUTHENTICATION_REQUIRED') || error.statusCode === 401) {
      errorResponse.error = 'Database authentication failed';
      errorResponse.details = 'Server configuration error - please contact support';
    } else if (error.statusCode === 422) {
      errorResponse.error = 'Invalid data format';
      errorResponse.details = 'Please check your input and try again';
    } else if (error.code === 'ENOTFOUND' || error.message.includes('network')) {
      errorResponse.error = 'Network connection failed';
      errorResponse.details = 'Please check your internet connection and try again';
    }

    // Include technical details for debugging
    errorResponse.technical = {
      originalError: error.message,
      statusCode: error.statusCode,
      errorType: error.type
    };

    res.status(500).json(errorResponse);
  }
}; 