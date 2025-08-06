const { google } = require('googleapis');
const nodemailer = require('nodemailer');

// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: "fermi-vision",
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
    universe_domain: "googleapis.com"
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    // Parse form data
    const formData = JSON.parse(event.body);
    const { name, company, email, description, interests } = formData;

    // Validate required fields
    if (!name || !email || !description) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name, email, and description are required' }),
      };
    }

    // Add timestamp
    const timestamp = new Date().toISOString();
    
    // Format interests as comma-separated string
    const interestsList = Object.entries(interests)
      .filter(([key, value]) => value)
      .map(([key]) => key)
      .join(', ');

    const rowData = [
      timestamp, 
      name, 
      company || '', 
      email, 
      description,
      interestsList
    ];

    // Append to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Customer Requests!A:F',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [rowData],
      },
    });

    // Send email notification (temporarily disabled)
    // Uncomment the code below when you're ready to set up email notifications
    /*
    const emailContent = `
      New Customer Request Form Submission:
      
      Name: ${name}
      Company: ${company || 'Not specified'}
      Email: ${email}
      Description: ${description}
      Interests: ${interestsList || 'None selected'}
      
      Submitted at: ${timestamp}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'sales@fermivision.com',
      subject: `New Customer Request: ${name} from ${company || 'Unknown Company'}`,
      text: emailContent,
      html: `
        <h2>New Customer Request Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Description:</strong></p>
        <p>${description.replace(/\n/g, '<br>')}</p>
        <p><strong>Interests:</strong> ${interestsList || 'None selected'}</p>
        <p><em>Submitted at: ${timestamp}</em></p>
      `,
    });
    */

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Request submitted successfully' 
      }),
    };

  } catch (error) {
    console.error('Error processing customer request:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      }),
    };
  }
}; 