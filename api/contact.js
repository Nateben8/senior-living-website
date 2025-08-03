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
    const { name, email, phone, message, careType, urgency, source } = req.body;

    // Include all form data in the message field to avoid Airtable select field issues
    const fullMessage = `Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Care Type: ${careType || 'Not specified'}
Urgency: ${urgency || 'Not specified'}
Source: ${source || 'contact-page'}
Message: ${message || 'No message provided'}`;

    const fields = {
      'Name': name,
      'Email': email,
      'Phone': phone || '',
      'Message': fullMessage,
      'Status': 'New',
      'Created At': new Date().toISOString(),
      'IP Address': req.headers['x-forwarded-for'] || req.connection?.remoteAddress || '',
      'User Agent': req.headers['user-agent'] || '',
    };

    const record = await base('Contact Submissions').create([
      { fields: fields }
    ]);

    console.log('Contact submitted to Airtable:', record[0].id);
    res.status(201).json({ success: true, message: 'Contact submitted successfully' });
  } catch (error) {
    console.error('Contact submission error:', error.message);
    console.error('Full error:', error);
    res.status(500).json({ success: false, message: 'Failed to submit contact', error: error.message });
  }
} 