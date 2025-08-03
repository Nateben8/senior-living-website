# Database Migration Guide

## Adding Submission ID Fields

If you have an existing database, you'll need to run these SQL commands to add the submission ID fields:

### For Contact Submissions Table

```sql
-- Add submission_id column to contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN submission_id SERIAL;

-- Add care_type and urgency columns to contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN care_type VARCHAR(100);

ALTER TABLE contact_submissions 
ADD COLUMN urgency VARCHAR(100);

-- Update existing records to have sequential IDs
UPDATE contact_submissions 
SET submission_id = DEFAULT 
WHERE submission_id IS NULL;
```

### For Quiz Submissions Table

```sql
-- Add submission_id column to quiz_submissions table
ALTER TABLE quiz_submissions 
ADD COLUMN submission_id SERIAL;

-- Update existing records to have sequential IDs
UPDATE quiz_submissions 
SET submission_id = DEFAULT 
WHERE submission_id IS NULL;
```

## Complete Database Schema

After migration, your tables should have these structures:

### Contact Submissions Table
```sql
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  care_type VARCHAR(100),
  urgency VARCHAR(100),
  message TEXT NOT NULL,
  source VARCHAR(100),
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
  is_processed BOOLEAN DEFAULT FALSE,
  notes TEXT,
  airtable_record_id VARCHAR(100)
);
```

### Quiz Submissions Table
```sql
CREATE TABLE quiz_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  location VARCHAR(255),
  questions JSONB NOT NULL,
  care_type VARCHAR(100),
  budget VARCHAR(100),
  timeline VARCHAR(100),
  urgency VARCHAR(100),
  source VARCHAR(100),
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
  is_processed BOOLEAN DEFAULT FALSE,
  notes TEXT,
  airtable_record_id VARCHAR(100)
);
```

## Verification

After running the migration, verify the changes:

```sql
-- Check contact submissions structure
\d contact_submissions

-- Check quiz submissions structure
\d quiz_submissions

-- Verify submission_id sequences
SELECT MAX(submission_id) FROM contact_submissions;
SELECT MAX(submission_id) FROM quiz_submissions;
```

## Important Notes

1. **Backup your database** before running migrations
2. **Test in development** before applying to production
3. **The SERIAL type** automatically creates a sequence starting at 1
4. **Existing records** will get sequential IDs when updated
5. **New submissions** will automatically get the next available ID

## Troubleshooting

### If migration fails:
1. Check that you have proper database permissions
2. Verify the table names match your schema
3. Ensure no foreign key constraints are blocking the changes

### If submission IDs are not sequential:
1. Reset the sequences after migration:
```sql
-- Reset contact submissions sequence
SELECT setval('contact_submissions_submission_id_seq', (SELECT MAX(submission_id) FROM contact_submissions));

-- Reset quiz submissions sequence
SELECT setval('quiz_submissions_submission_id_seq', (SELECT MAX(submission_id) FROM quiz_submissions));
```

### If Airtable sync fails:
1. Verify the field names match exactly in Airtable
2. Check that the Submission ID field is set to "Number" type
3. Ensure the API key has write permissions 