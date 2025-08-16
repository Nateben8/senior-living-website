export default async function handler(req, res) {
	// Enable CORS for all requests
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}

	if (req.method !== 'POST') {
		return res.status(405).json({ success: false, error: 'Method not allowed', method: req.method });
	}

	try {
		const apiKey = process.env.AIRTABLE_API_KEY;
		const baseId = process.env.AIRTABLE_BASE_ID;
		if (!apiKey || !baseId) {
			return res.status(500).json({ success: false, error: 'Server configuration error' });
		}

		const { name, email, phone, location, careType, budget, timeline, urgency, source, questions } = req.body || {};
		if (!name || !String(name).trim()) {
			return res.status(400).json({ success: false, error: 'Name is required' });
		}
		if (!email || !String(email).trim()) {
			return res.status(400).json({ success: false, error: 'Email is required' });
		}

		let formattedQuestions = '';
		if (questions) {
			try {
				const parsed = typeof questions === 'string' ? JSON.parse(questions) : questions;
				formattedQuestions = Object.entries(parsed)
					.filter(([key, value]) => value && key !== 'contactInfo')
					.map(([key, value]) => {
						const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
						if (Array.isArray(value)) return `${formattedKey}: ${value.join(', ')}`;
						if (typeof value === 'object') return `${formattedKey}: ${JSON.stringify(value)}`;
						return `${formattedKey}: ${value}`;
					})
					.join('\n\n');
			} catch {
				formattedQuestions = String(questions);
			}
		}

		const fields = {
			Name: String(name).trim(),
			Email: String(email).trim(),
			Phone: phone ? String(phone).trim() : '',
			Location: location ? String(location).trim() : '',
			Status: 'New',
			'Created At': new Date().toISOString(),
			'Questions and Answers': formattedQuestions,
			'IP Address': req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection?.remoteAddress || 'unknown',
			'User Agent': req.headers['user-agent'] || 'unknown',
			Source: source || 'quiz',
			'Care Type': careType || '',
			Budget: budget || '',
			Timeline: timeline || urgency || '',
			Urgency: urgency || '',
		};

		const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent('Quiz Submissions')}`;
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

		return res.status(201).json({
			success: true,
			message: 'Quiz submitted successfully',
			recordId,
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		return res.status(500).json({ success: false, error: 'Quiz submission failed', message: error?.message || 'Unknown error' });
	}
} 