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
    const response = {
      success: true,
      timestamp: new Date().toISOString(),
      method: req.method,
      hasAirtableKey: !!process.env.AIRTABLE_API_KEY,
      hasAirtableBase: !!process.env.AIRTABLE_BASE_ID,
      airtableKeyPrefix: process.env.AIRTABLE_API_KEY ? process.env.AIRTABLE_API_KEY.substring(0, 10) + '...' : 'missing',
      airtableBasePrefix: process.env.AIRTABLE_BASE_ID ? process.env.AIRTABLE_BASE_ID.substring(0, 10) + '...' : 'missing',
      environment: process.env.NODE_ENV || 'unknown',
      message: 'API is working correctly'
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}; 