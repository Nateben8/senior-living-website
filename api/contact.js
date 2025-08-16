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
		const apiKey = process.env.AIRTABLE_API_KEY;
		const baseId = process.env.AIRTABLE_BASE_ID;
		if (!apiKey || !baseId) {
			return res.status(500).json({ success: false, error: 'Server configuration error' });
		}

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

		const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent('Contact Submissions')}`;
		const atRes = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ records: [{ fields }] }),
		});

		if (!atRes.ok) {
			const errText = await atRes.text().catch(() => '');
			return res.status(500).json({ success: false, error: 'Airtable request failed', details: errText });
		}
		const data = await atRes.json();
		const recordId = data?.records?.[0]?.id || null;

		return res.status(201).json({ success: true, message: 'Contact submitted successfully', recordId });
	} catch (error) {
		return res.status(500).json({ success: false, message: 'Failed to submit contact', error: error?.message || 'Unknown' });
	}
} 