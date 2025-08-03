const Airtable = require('airtable');

const base = new Airtable({ 
  apiKey: 'patEmDz9bthruzpR7.3fbdf686d7cda89fa5556715ea121bf6621985cff678a4b23f1f5fc73f578a31' 
}).base('appkG1v7qlXS1ZfOV');

async function testAirtable() {
  try {
    console.log('Testing Airtable connection...');
    
    // List all tables
    const tables = await base.tables();
    console.log('Available tables:', tables.map(table => table.name));
    
    // Try to access Quiz Submissions table
    try {
      const quizTable = base('Quiz Submissions');
      console.log('Quiz Submissions table found');
    } catch (error) {
      console.error('Error accessing Quiz Submissions table:', error.message);
    }
    
    // Try to access Contact Submissions table
    try {
      const contactTable = base('Contact Submissions');
      console.log('Contact Submissions table found');
    } catch (error) {
      console.error('Error accessing Contact Submissions table:', error.message);
    }
    
  } catch (error) {
    console.error('Airtable connection error:', error.message);
  }
}

testAirtable(); 