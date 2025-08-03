const Airtable = require('airtable');

const base = new Airtable({ 
  apiKey: 'patEmDz9bthruzpR7.3fbdf686d7cda89fa5556715ea121bf6621985cff678a4b23f1f5fc73f578a31' 
}).base('appkG1v7qlXS1ZfOV');

async function testAirtable() {
  try {
    console.log('Testing Airtable connection...');
    
    // Try to create a test record in Quiz Submissions
    try {
      const record = await base('Quiz Submissions').create([
        {
          fields: {
            'Name': 'Test User',
            'Email': 'test@example.com',
            'Phone': '555-1234',
            'Location': 'Los Angeles',
            'Status': 'New',
            'Created At': new Date().toISOString(),
            'Questions and Answers': 'Test questions'
          }
        }
      ]);
      
      console.log('✅ Successfully created test record in Quiz Submissions:', record[0].id);
      
      // Delete the test record
      await base('Quiz Submissions').destroy(record[0].id);
      console.log('✅ Test record deleted');
      
    } catch (error) {
      console.error('❌ Error with Quiz Submissions table:', error.message);
    }
    
  } catch (error) {
    console.error('❌ Airtable connection error:', error.message);
  }
}

testAirtable(); 