# Form Integration Setup Guide

This guide will help you set up form submissions to Google Sheets and email notifications for your Fermi Vision website.

## 🚀 Quick Setup

### 1. Google Sheets Setup

1. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it "Fermi Vision Form Submissions"

2. **Set up the sheets**
   - Create a sheet named "Contact Form"
   - Create a sheet named "Customer Requests"
   - Add headers to each sheet:

   **Contact Form Headers:**
   ```
   A: Timestamp | B: Name | C: Email | D: Subject | E: Message
   ```

   **Customer Requests Headers:**
   ```
   A: Timestamp | B: Name | C: Company | D: Email | E: Description | F: Interests
   ```

3. **Get Google Service Account**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing
   - Enable Google Sheets API
   - Go to "Credentials" → "Create Credentials" → "Service Account"
   - Download the JSON key file
   - Share your Google Sheet with the service account email

### 2. Gmail Setup (for email notifications)

1. **Create App Password**
   - Go to [Google Account Settings](https://myaccount.google.com)
   - Security → 2-Step Verification → App passwords
   - Generate app password for "Mail"
   - Save the 16-character password

### 3. Netlify Environment Variables

In your Netlify dashboard:

1. Go to Site Settings → Project -> Project Config -> Environment Variables
2. Add these variables:

```
GOOGLE_SERVICE_ACCOUNT_KEY = [Paste the entire JSON from step 1]
GOOGLE_SHEET_ID = [Your Google Sheet ID from URL]
EMAIL_USER = your-email@gmail.com
EMAIL_PASSWORD = [16-character app password from step 2]
```

### 4. Deploy to Netlify

1. **Install dependencies for functions:**
   ```bash
   cd netlify/functions
   npm install
   ```

2. **Deploy:**
   ```bash
   npm run build
   # Then deploy to Netlify
   ```

## 📋 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `GOOGLE_SERVICE_ACCOUNT_KEY` | Full JSON content of service account key | `{"type": "service_account", ...}` |
| `GOOGLE_SHEET_ID` | ID from Google Sheets URL | `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms` |
| `EMAIL_USER` | Gmail address for sending emails | `your-email@gmail.com` |
| `EMAIL_PASSWORD` | Gmail app password | `abcd efgh ijkl mnop` |

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid credentials" error**
   - Check that the service account JSON is complete
   - Verify the sheet is shared with the service account email

2. **"Email not sent" error**
   - Verify Gmail app password is correct
   - Check that 2FA is enabled on Gmail account

3. **"Function not found" error**
   - Ensure `netlify.toml` is in root directory
   - Verify functions are in `netlify/functions/`

### Testing:

1. **Test Contact Form:**
   - Fill out the contact form
   - Check Google Sheet for new row
   - Check email inbox for notification

2. **Test Customer Request Form:**
   - Fill out the customer request form
   - Check Google Sheet for new row
   - Check email inbox for notification

## 📊 Google Sheets Format

### Contact Form Sheet:
```
| Timestamp | Name | Email | Subject | Message |
|-----------|------|-------|---------|---------|
| 2024-01-15T10:30:00Z | John Doe | john@example.com | Product Inquiry | Hello, I'm interested in... |
```

### Customer Requests Sheet:
```
| Timestamp | Name | Company | Email | Description | Interests |
|-----------|------|---------|-------|-------------|-----------|
| 2024-01-15T10:30:00Z | Jane Smith | Tech Corp | jane@techcorp.com | Need pricing for... | priceRequest, applicationConsultation |
```

## 🔒 Security Notes

- Never commit environment variables to Git
- Use app passwords, not your main Gmail password
- Regularly rotate service account keys
- Monitor function logs in Netlify dashboard

## 📞 Support

If you encounter issues:
1. Check Netlify function logs
2. Verify all environment variables are set
3. Test with a simple form submission
4. Check Google Sheets permissions 