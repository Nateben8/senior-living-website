import 'dotenv/config';

export const config = {
	runtime: 'nodejs18.x'
};

export default async function handler(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}

	if (req.method !== 'POST') {
		return res.status(405).json({ success: false, error: 'Method not allowed' });
	}

	try {
		if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
			return res.status(500).json({ success: false, error: 'Server configuration error' });
		}

		const { default: Airtable } = await import('airtable');
		const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
			process.env.AIRTABLE_BASE_ID,
		);

		const { name, email, phone, message, careType, urgency, source } = req.body || {};

		const fullMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCare Type: ${careType || 'Not specified'}\nUrgency: ${urgency || 'Not specified'}\nSource: ${source || 'contact-page'}\nMessage: ${message || 'No message provided'}`;

		const fields = {
			Name: name,
			Email: email,
			Phone: phone || '',
			Message: fullMessage,
			Status: 'New',
			'Created At': new Date().toISOString(),
			'IP Address': req.headers['x-forwarded-for'] || req.connection?.remoteAddress || '',
			'User Agent': req.headers['user-agent'] || '',
		};

		const record = await base('Contact Submissions').create([{ fields }]);

		return res
			.status(201)
			.json({ success: true, message: 'Contact submitted successfully', recordId: record[0].id });
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: 'Failed to submit contact', error: error?.message || 'Unknown' });
	}
} 