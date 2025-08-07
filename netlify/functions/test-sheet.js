const { google } = require('googleapis');

// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

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
    const sheetId = process.env.GOOGLE_SHEET_ID;
    
    if (!sheetId) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'GOOGLE_SHEET_ID not set' }),
      };
    }

    // Try to get sheet metadata
    const response = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        sheetTitle: response.data.properties.title,
        sheets: response.data.sheets.map(sheet => sheet.properties.title),
        sheetId: sheetId
      }),
    };

  } catch (error) {
    console.error('Error testing sheet:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Sheet test failed',
        details: error.message,
        sheetId: process.env.GOOGLE_SHEET_ID ? process.env.GOOGLE_SHEET_ID.substring(0, 10) + '...' : 'not set'
      }),
    };
  }
}; 