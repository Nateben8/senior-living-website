import 'dotenv/config';

export default async function handler(req, res) {
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
		return res.status(405).json({
			success: false,
			error: 'Method not allowed',
			method: req.method,
		});
	}

	try {
		// Check env vars
		if (!process.env.AIRTABLE_API_KEY || !process.env.AIRTABLE_BASE_ID) {
			return res.status(500).json({
				success: false,
				error: 'Server configuration error',
				hasKey: !!process.env.AIRTABLE_API_KEY,
				hasBase: !!process.env.AIRTABLE_BASE_ID,
			});
		}

		// Dynamic import for CJS interop
		const { default: Airtable } = await import('airtable');
		const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
			process.env.AIRTABLE_BASE_ID,
		);

		// Extract request data
		const {
			name,
			email,
			phone,
			location,
			careType,
			budget,
			timeline,
			urgency,
			source,
			questions,
		} = req.body || {};

		// Validate required fields
		if (!name || !String(name).trim()) {
			return res.status(400).json({ success: false, error: 'Name is required' });
		}
		if (!email || !String(email).trim()) {
			return res.status(400).json({ success: false, error: 'Email is required' });
		}

		// Format questions
		let formattedQuestions = '';
		if (questions) {
			try {
				const parsed = typeof questions === 'string' ? JSON.parse(questions) : questions;
				formattedQuestions = Object.entries(parsed)
					.filter(([key, value]) => value && key !== 'contactInfo')
					.map(([key, value]) => {
						const formattedKey = key
							.replace(/([A-Z])/g, ' $1')
							.replace(/^./, (str) => str.toUpperCase());
						if (Array.isArray(value)) return `${formattedKey}: ${value.join(', ')}`;
						if (typeof value === 'object') return `${formattedKey}: ${JSON.stringify(value)}`;
						return `${formattedKey}: ${value}`;
					})
					.join('\n\n');
			} catch {
				formattedQuestions = String(questions);
			}
		}

		// Prepare Airtable record
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
		};

		const record = await base('Quiz Submissions').create([{ fields }]);

		return res.status(201).json({
			success: true,
			message: 'Quiz submitted successfully',
			recordId: record[0].id,
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'Quiz submission failed',
			message: error?.message || 'Unknown error',
			timestamp: new Date().toISOString(),
		});
	}
} 