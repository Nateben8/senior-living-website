# Quiz Submissions Table Update Guide

## 🚨 Current Issue
Your Quiz Submissions table in Airtable is missing several important fields that the quiz form collects. This means you're not capturing all the valuable data from quiz submissions.

## 📊 Current Fields (Available)
- ✅ Submission ID
- ✅ Name
- ✅ Email
- ✅ Phone
- ✅ Location
- ✅ Created At
- ✅ AI Recommended Facilities

## ❌ Missing Fields (Need to Add)
You need to add these fields to your Quiz Submissions table:

### 1. Care Type
- **Field Type**: Single select
- **Options**: 
  - Assisted Living
  - Memory Care
  - Independent Living
  - Nursing Home
  - Not Sure

### 2. Budget
- **Field Type**: Single select
- **Options**:
  - $1,000-$2,000
  - $2,000-$3,000
  - $3,000-$4,000
  - $4,000+

### 3. Timeline
- **Field Type**: Single select
- **Options**:
  - Immediate
  - Within 30 days
  - Within 3 months
  - Just exploring

### 4. Urgency
- **Field Type**: Single select
- **Options**:
  - Immediate
  - Soon
  - Planning
  - Researching

### 5. Source
- **Field Type**: Single select
- **Options**:
  - Quiz
  - Assessment

### 6. Questions and Answers
- **Field Type**: Long text
- **Purpose**: Contains all quiz questions and user responses

### 7. IP Address
- **Field Type**: Single line text
- **Purpose**: Track visitor's IP address

### 8. User Agent
- **Field Type**: Long text
- **Purpose**: Browser/device information

### 9. Status
- **Field Type**: Single select
- **Options**:
  - New
  - Processed

## 🔧 How to Add Fields in Airtable

1. **Open your Airtable base**
2. **Go to the "Quiz Submissions" table**
3. **Click the "+" button next to the last column**
4. **Add each field with the exact name and type listed above**
5. **For Single select fields, add the options listed above**

## 📋 Complete Field List (After Update)
Your table should have these fields in this order:

| Field Name | Field Type | Description |
|------------|------------|-------------|
| **Submission ID** | Number | Sequential ID starting at 1 |
| **Name** | Single line text | Contact person's name |
| **Email** | Email | Contact person's email |
| **Phone** | Phone number | Contact person's phone |
| **Location** | Single line text | Preferred location |
| **Care Type** | Single select | "Assisted Living", "Memory Care", "Independent Living", "Nursing Home", "Not Sure" |
| **Budget** | Single select | "$1,000-$2,000", "$2,000-$3,000", "$3,000-$4,000", "$4,000+" |
| **Timeline** | Single select | "Immediate", "Within 30 days", "Within 3 months", "Just exploring" |
| **Urgency** | Single select | "Immediate", "Soon", "Planning", "Researching" |
| **Source** | Single select | "Quiz", "Assessment" |
| **Questions and Answers** | Long text | All quiz questions and answers |
| **IP Address** | Single line text | Visitor's IP address |
| **User Agent** | Long text | Browser/device information |
| **Created At** | Date & Time | When submission was received |
| **Status** | Single select | "New", "Processed" |
| **AI Recommended Facilities** | Long text | AI-generated facility recommendations |

## ✅ After You Update the Table
Once you've added all the missing fields, the quiz form submissions will automatically populate all fields with comprehensive data, giving you much better insights into your leads and their needs.

## 🎯 Benefits of Complete Data
- **Better lead qualification** - Know urgency and budget upfront
- **Improved follow-up** - Understand timeline and care needs
- **Enhanced analytics** - Track conversion rates by care type, budget, etc.
- **Better customer service** - Have all context for personalized responses 