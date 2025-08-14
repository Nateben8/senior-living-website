export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Simple test works!',
    timestamp: new Date().toISOString(),
    hasAirtableKey: !!process.env.AIRTABLE_API_KEY,
    hasAirtableBase: !!process.env.AIRTABLE_BASE_ID
  });
} 