const fetch = require('node-fetch');

async function testQuizSubmission() {
  try {
    const response = await fetch('http://localhost:3001/api/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '555-1234',
        location: 'Los Angeles',
        careType: 'assisted-living',
        budget: '$3000-5000',
        timeline: 'immediate',
        urgency: 'immediate',
        source: 'quiz',
        questions: 'Test questions'
      }),
    });

    console.log('Response status:', response.status);
    const data = await response.text();
    console.log('Response data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testQuizSubmission(); 