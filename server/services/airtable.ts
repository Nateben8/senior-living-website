import Airtable from 'airtable';

// Initialize Airtable
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID!);

// Contact Submissions Table
const CONTACT_TABLE = 'Contact Submissions';
const QUIZ_TABLE = 'Quiz Submissions';

export interface AirtableContactSubmission {
  'Submission ID': number;
  'Name': string;
  'Email': string;
  'Phone'?: string;
  'Care Type'?: string;
  'Urgency'?: string;
  'Message': string;
  'Source'?: string;
  'IP Address'?: string;
  'User Agent'?: string;
  'Created At': string;
  'Status': 'New' | 'Processed';
  'Notes'?: string;
}

export interface AirtableQuizSubmission {
  'Submission ID': number;
  'Name': string;
  'Email': string;
  'Phone'?: string;
  'Location'?: string;
  'Care Type'?: string;
  'Budget'?: string;
  'Timeline'?: string;
  'Urgency'?: string;
  'Source'?: string;
  'Questions and Answers': string; // Formatted as "Q: Question A: Answer"
  'IP Address'?: string;
  'User Agent'?: string;
  'Created At': string;
  'Status': 'New' | 'Processed';
  'Notes'?: string;
}

export class AirtableService {
  // Sync contact submission to Airtable
  static async syncContactSubmission(submission: any): Promise<string | null> {
    try {
      const airtableRecord = {
        'Submission ID': submission.submissionId,
        'Name': submission.name,
        'Email': submission.email,
        'Phone': submission.phone || '',
        'Care Type': submission.careType || '',
        'Urgency': submission.urgency || '',
        'Message': submission.message,
        'Source': submission.source || '',
        'IP Address': submission.ipAddress || '',
        'User Agent': submission.userAgent || '',
        'Created At': submission.createdAt,
        'Status': submission.isProcessed ? 'Processed' : 'New',
        'Notes': submission.notes || ''
      };

      const records = await base(CONTACT_TABLE).create([
        { fields: airtableRecord }
      ]);

      return records[0].id;
    } catch (error) {
      console.error('Error syncing contact submission to Airtable:', error);
      return null;
    }
  }

  // Sync quiz submission to Airtable
  static async syncQuizSubmission(submission: any): Promise<string | null> {
    try {
      // Format questions and answers for Airtable
      const questionsText = submission.questions
        .map((q: any) => `Q: ${q.question}\nA: ${q.answer}`)
        .join('\n\n');

      const airtableRecord = {
        'Submission ID': submission.submissionId,
        'Name': submission.name,
        'Email': submission.email,
        'Phone': submission.phone || '',
        'Location': submission.location || '',
        'Care Type': submission.careType || '',
        'Budget': submission.budget || '',
        'Timeline': submission.timeline || '',
        'Urgency': submission.urgency || '',
        'Source': submission.source || '',
        'Questions and Answers': questionsText,
        'IP Address': submission.ipAddress || '',
        'User Agent': submission.userAgent || '',
        'Created At': submission.createdAt,
        'Status': submission.isProcessed ? 'Processed' : 'New',
        'Notes': submission.notes || ''
      };

      const records = await base(QUIZ_TABLE).create([
        { fields: airtableRecord }
      ]);

      return records[0].id;
    } catch (error) {
      console.error('Error syncing quiz submission to Airtable:', error);
      return null;
    }
  }

  // Update submission status in Airtable
  static async updateSubmissionStatus(tableName: string, recordId: string, status: 'New' | 'Processed', notes?: string): Promise<boolean> {
    try {
      await base(tableName).update([
        {
          id: recordId,
          fields: {
            'Status': status,
            ...(notes && { 'Notes': notes })
          }
        }
      ]);
      return true;
    } catch (error) {
      console.error('Error updating submission status in Airtable:', error);
      return false;
    }
  }

  // Get all records from Airtable (for backup/verification)
  static async getAllContactSubmissions(): Promise<any[]> {
    try {
      const records = await base(CONTACT_TABLE).select().all();
      return records.map(record => ({
        id: record.id,
        ...record.fields
      }));
    } catch (error) {
      console.error('Error fetching contact submissions from Airtable:', error);
      return [];
    }
  }

  static async getAllQuizSubmissions(): Promise<any[]> {
    try {
      const records = await base(QUIZ_TABLE).select().all();
      return records.map(record => ({
        id: record.id,
        ...record.fields
      }));
    } catch (error) {
      console.error('Error fetching quiz submissions from Airtable:', error);
      return [];
    }
  }
} 