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

  try {
    res.status(200).json({ 
      success: true, 
      message: 'API is working!',
      timestamp: new Date().toISOString(),
      method: req.method,
      hasAirtableKey: !!process.env.AIRTABLE_API_KEY,
      hasAirtableBase: !!process.env.AIRTABLE_BASE_ID
    });
  } catch (error) {
    console.error('Test API error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'API test failed', 
      error: error.message 
    });
  }
} 