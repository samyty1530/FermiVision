const { google } = require('googleapis');

exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    console.log('Starting debug...');
    
    // Parse service account
    const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
    console.log('Service account email:', serviceAccount.client_email);
    console.log('Sheet ID:', process.env.GOOGLE_SHEET_ID);
    
    // Setup auth
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    console.log('Attempting to access sheet...');
    
    // Try to get sheet info
    const response = await sheets.spreadsheets.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
    });

    console.log('Success! Sheet title:', response.data.properties.title);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        sheetTitle: response.data.properties.title,
        sheets: response.data.sheets.map(s => s.properties.title),
        serviceAccountEmail: serviceAccount.client_email
      }),
    };

  } catch (error) {
    console.error('Debug error:', error.message);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Debug failed',
        details: error.message,
        serviceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_KEY ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY).client_email : 'unknown'
      }),
    };
  }
}; 