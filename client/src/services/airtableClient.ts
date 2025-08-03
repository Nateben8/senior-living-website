import Airtable from 'airtable';

// Initialize Airtable with your credentials
const base = new Airtable({ 
  apiKey: 'patEmDz9bthruzpR7.3fbdf686d7cda89fa5556715ea121bf6621985cff678a4b23f1f5fc73f578a31' 
}).base('appkG1v7qlXS1ZfOV');

export const airtableClient = {
  // Submit contact form to Airtable
  async submitContact(data: {
    name: string;
    email: string;
    phone?: string;
    careType?: string;
    urgency?: string;
    message: string;
    source?: string;
  }) {
    try {
      const record = await base('Contact Submissions').create([
        {
          fields: {
            'Name': data.name,
            'Email': data.email,
            'Phone': data.phone || '',
            'Care Type': data.careType || '',
            'Urgency': data.urgency || '',
            'Message': data.message,
            'Source': data.source || 'contact-page',
            'Status': 'New',
            'Created At': new Date().toISOString(),
          }
        }
      ]);
      
      console.log('Contact submitted to Airtable:', record[0].id);
      return record[0].id;
    } catch (error) {
      console.error('Error submitting contact to Airtable:', error);
      throw error;
    }
  },

  // Submit quiz form to Airtable
  async submitQuiz(data: {
    name: string;
    email: string;
    phone?: string;
    location?: string;
    careType?: string;
    budget?: string;
    timeline?: string;
    urgency?: string;
    source?: string;
    questions?: string;
  }) {
    try {
      const record = await base('Quiz Submissions').create([
        {
          fields: {
            'Name': data.name,
            'Email': data.email,
            'Phone': data.phone || '',
            'Location': data.location || '',
            'Care Type': data.careType || '',
            'Budget': data.budget || '',
            'Timeline': data.timeline || '',
            'Urgency': data.urgency || '',
            'Source': data.source || 'quiz',
            'Status': 'New',
            'Created At': new Date().toISOString(),
            'Questions and Answers': data.questions || '',
          }
        }
      ]);
      
      console.log('Quiz submitted to Airtable:', record[0].id);
      return record[0].id;
    } catch (error) {
      console.error('Error submitting quiz to Airtable:', error);
      throw error;
    }
  }
}; 