# Airtable Integration Setup Guide

## Step 1: Create Your Airtable Account

1. **Go to [Airtable.com](https://airtable.com)**
2. **Sign up for a free account**
3. **Create a new base** (workspace) for your senior living submissions

## Step 2: Set Up Your Tables

### Create "Contact Submissions" Table
Create a table with these fields (in this exact order):

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Submission ID** | Number | Sequential ID starting at 1 |
| **Name** | Single line text | Contact person's name |
| **Email** | Email | Contact person's email |
| **Phone** | Phone number | Contact person's phone |
| **Care Type** | Single select | "Assisted Living", "Memory Care", "Independent Living", "Nursing Home", "Not Sure" |
| **Urgency** | Single select | "Immediate", "Soon", "Planning", "Researching" |
| **Message** | Long text | Contact message |
| **Source** | Single select | "Contact Form", "Footer", "Header" |
| **IP Address** | Single line text | Visitor's IP address |
| **User Agent** | Long text | Browser/device information |
| **Created At** | Date & Time | When submission was received |
| **Status** | Single select | "New", "Processed" |
| **Notes** | Long text | Internal notes about the submission |

### Create "Quiz Submissions" Table
Create a table with these fields (in this exact order):

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Submission ID** | Number | Sequential ID starting at 1 |
| **Name** | Single line text | Contact person's name |
| **Email** | Email | Contact person's email |
| **Phone** | Phone number | Contact person's phone |
| **Location** | Single line text | Preferred location |
| **Care Type** | Single select | "Assisted Living", "Memory Care", "Independent Living", "Nursing Home" |
| **Budget** | Single select | "$1,000-$2,000", "$2,000-$3,000", "$3,000-$4,000", "$4,000+" |
| **Timeline** | Single select | "Immediate", "Within 30 days", "Within 3 months", "Just exploring" |
| **Urgency** | Single select | "Immediate", "Within 30 days", "Within 3 months", "Just exploring" |
| **Source** | Single select | "Quiz", "Assessment" |
| **Questions and Answers** | Long text | All quiz questions and answers |
| **IP Address** | Single line text | Visitor's IP address |
| **User Agent** | Long text | Browser/device information |
| **Created At** | Date & Time | When submission was received |
| **Status** | Single select | "New", "Processed" |
| **Notes** | Long text | Internal notes about the submission |

## Step 3: Get Your Airtable Credentials

### Get Your API Key
1. Go to your Airtable account settings
2. Click on "API" in the left sidebar
3. Copy your API key (starts with `key...`)

### Get Your Base ID
1. Open your Airtable base
2. Look at the URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. Copy the Base ID (the part after `/app/`)

## Step 4: Update Your Environment Variables

Edit the `.env` file in your project root and replace the placeholder values:

```bash
# Database Configuration
DATABASE_URL="postgresql://your-username:your-password@your-host:5432/your-database"

# Airtable Configuration
AIRTABLE_API_KEY="keyYOUR_ACTUAL_API_KEY_HERE"
AIRTABLE_BASE_ID="appYOUR_ACTUAL_BASE_ID_HERE"

# Server Configuration
PORT=3001
NODE_ENV=development
```

## Step 5: Install Missing Dependencies

The server needs the `cors` package. Install it:

```bash
cd server
npm install cors
```

## Step 6: Start the Backend Server

```bash
npm run server:dev
```

## Step 7: Test the Integration

1. **Fill out a contact form** on your website
2. **Take the assessment quiz**
3. **Check your Airtable base** - you should see the submissions appear automatically with sequential IDs

## Field Mapping

The system automatically maps form data to Airtable fields:

**Contact Form → Contact Submissions Table:**
- `submissionId` → Submission ID (auto-incrementing number)
- `name` → Name
- `email` → Email  
- `phone` → Phone
- `careType` → Care Type
- `urgency` → Urgency
- `message` → Message
- `source` → Source (set to "Contact Form")
- `ipAddress` → IP Address
- `userAgent` → User Agent
- `createdAt` → Created At
- `status` → Status (set to "New")

**Quiz Form → Quiz Submissions Table:**
- `submissionId` → Submission ID (auto-incrementing number)
- All quiz answers are mapped to corresponding fields
- `questions` → Questions and Answers (formatted as Q&A pairs)
- `createdAt` → Created At
- `status` → Status (set to "New")

## Submission ID System

- **Contact Submissions**: Start at ID #1 and increment sequentially
- **Quiz Submissions**: Start at ID #1 and increment sequentially
- **Separate counters**: Contact and Quiz submissions have separate ID sequences
- **Auto-generated**: IDs are automatically assigned when submissions are created

## Troubleshooting

### If the server won't start:
1. Make sure all dependencies are installed: `npm install`
2. Check that your `.env` file has the correct values
3. Verify your Airtable API key and Base ID are correct

### If submissions aren't appearing in Airtable:
1. Check the server console for error messages
2. Verify your table field names match exactly (including case)
3. Make sure your API key has write permissions

### If Submission IDs are missing:
1. Check that the database schema has been updated
2. Verify the `submissionId` field exists in your database
3. Restart the server after schema changes

## Security Notes

- Keep your `.env` file secure and never commit it to version control
- Your API key gives access to your Airtable data, so keep it private
- Consider using environment variables in production

## Next Steps

Once set up, you can:
1. **View all submissions** in your Airtable base with sequential IDs
2. **Track submission numbers** for reporting and follow-up
3. **Export data** for analysis
4. **Set up automations** in Airtable
5. **Create dashboards** to track your leads
6. **Integrate with other tools** like CRM systems

## Example Submission IDs

**Contact Submissions:**
- #1 - John Smith (john@email.com)
- #2 - Mary Johnson (mary@email.com)
- #3 - Robert Davis (robert@email.com)

**Quiz Submissions:**
- #1 - Sarah Wilson (sarah@email.com) - Assisted Living
- #2 - Michael Brown (michael@email.com) - Memory Care
- #3 - Lisa Garcia (lisa@email.com) - Independent Living 