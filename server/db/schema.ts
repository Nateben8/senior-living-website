import { pgTable, text, timestamp, uuid, varchar, boolean, jsonb, serial } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

// Contact Form Submissions
export const contactSubmissions = pgTable('contact_submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  submissionId: serial('submission_id').notNull(), // Sequential ID starting at 1
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }),
  careType: varchar('care_type', { length: 100 }), // 'assisted-living', 'memory-care', etc.
  urgency: varchar('urgency', { length: 100 }), // 'immediate', 'soon', 'planning', etc.
  message: text('message').notNull(),
  source: varchar('source', { length: 100 }), // e.g., 'contact-page', 'footer', 'header'
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  isProcessed: boolean('is_processed').default(false),
  notes: text('notes'), // For internal notes about the submission
  airtableRecordId: varchar('airtable_record_id', { length: 100 }), // Airtable record ID
});

// Quiz/Assessment Submissions with detailed question tracking
export const quizSubmissions = pgTable('quiz_submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  submissionId: serial('submission_id').notNull(), // Sequential ID starting at 1
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }),
  location: varchar('location', { length: 255 }),
  
  // Quiz Questions and Answers (stored as JSON)
  questions: jsonb('questions').notNull(), // Array of {question: string, answer: string}
  
  // Summary fields for easy querying
  careType: varchar('care_type', { length: 100 }), // 'assisted-living', 'memory-care', etc.
  budget: varchar('budget', { length: 100 }),
  timeline: varchar('timeline', { length: 100 }),
  urgency: varchar('urgency', { length: 100 }),
  
  source: varchar('source', { length: 100 }), // e.g., 'quiz-intro', 'assessment-page'
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  isProcessed: boolean('is_processed').default(false),
  notes: text('notes'),
  airtableRecordId: varchar('airtable_record_id', { length: 100 }), // Airtable record ID
});

// Zod schemas for validation
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions);
export const selectContactSubmissionSchema = createSelectSchema(contactSubmissions);

export const insertQuizSubmissionSchema = createInsertSchema(quizSubmissions);
export const selectQuizSubmissionSchema = createSelectSchema(quizSubmissions);

// Type exports
export type ContactSubmission = z.infer<typeof selectContactSubmissionSchema>;
export type QuizSubmission = z.infer<typeof selectQuizSubmissionSchema>;

// Quiz question types
export interface QuizQuestion {
  question: string;
  answer: string;
  questionId?: string;
}

export interface QuizSubmissionData {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  questions: QuizQuestion[];
  careType?: string;
  budget?: string;
  timeline?: string;
  urgency?: string;
  source?: string;
} 