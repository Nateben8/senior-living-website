const Airtable = require('airtable');

// Simulate the exact same environment as Vercel
process.env.AIRTABLE_API_KEY = 'patEmDz9bthruzpR7.3fbdf686d7cda89fa5556715ea121bf6621985cff678a4b23f1f5fc73f578a31';
process.env.AIRTABLE_BASE_ID = 'appkG1v7qlXS1ZfOV';

// Import the API handler
const handler = require('./api/quiz.cjs');

async function testBulletproofAPI() {
  console.log('🧪 Testing bulletproof API...\n');

  // Mock request and response objects
  const mockReq = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-forwarded-for': '127.0.0.1',
      'user-agent': 'Test Browser'
    },
    body: {
      name: 'Bulletproof Test User',
      email: 'bulletproof@test.com',
      phone: '(555) 999-8888',
      location: 'Los Angeles, CA',
      careType: 'assisted-living',
      budget: '3000-5000',
      timeline: 'immediate',
      urgency: 'immediate',
      source: 'quiz',
      questions: JSON.stringify({
        careType: 'assisted-living',
        budget: '3000-5000',
        timeline: 'immediate',
        location: 'Los Angeles, CA',
        contactInfo: {
          firstName: 'Bulletproof',
          lastName: 'Test User',
          email: 'bulletproof@test.com',
          phone: '(555) 999-8888'
        }
      })
    }
  };

  let responseStatus = null;
  let responseData = null;

  const mockRes = {
    setHeader: (name, value) => console.log(`📎 Header set: ${name} = ${value}`),
    status: (code) => {
      responseStatus = code;
      console.log(`📊 Status code: ${code}`);
      return mockRes;
    },
    json: (data) => {
      responseData = data;
      console.log(`📄 Response data:`, JSON.stringify(data, null, 2));
      return mockRes;
    },
    end: () => console.log('✅ Response ended')
  };

  try {
    await handler(mockReq, mockRes);
    
    if (responseStatus === 201 && responseData?.success) {
      console.log('\n🎉 SUCCESS! API test passed');
      console.log('✅ Record ID:', responseData.recordId);
      
      // Clean up test record
      const base = new Airtable({
        apiKey: process.env.AIRTABLE_API_KEY
      }).base(process.env.AIRTABLE_BASE_ID);
      
      await base('Quiz Submissions').destroy(responseData.recordId);
      console.log('🧹 Test record cleaned up');
      
    } else {
      console.log('\n❌ API test failed');
      console.log('Status:', responseStatus);
      console.log('Response:', responseData);
    }
    
  } catch (error) {
    console.error('\n💥 Test failed with exception:', error.message);
  }
}

testBulletproofAPI(); 