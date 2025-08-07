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
    // Check environment variables
    const hasServiceAccount = !!process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    const hasSheetId = !!process.env.GOOGLE_SHEET_ID;
    
    // Check if service account key is valid JSON
    let serviceAccountValid = false;
    let serviceAccountError = '';
    
    if (hasServiceAccount) {
      try {
        const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
        serviceAccountValid = serviceAccount.type === 'service_account' && serviceAccount.client_email;
      } catch (error) {
        serviceAccountError = error.message;
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        hasServiceAccount,
        hasSheetId,
        serviceAccountValid,
        serviceAccountError,
        sheetIdLength: process.env.GOOGLE_SHEET_ID ? process.env.GOOGLE_SHEET_ID.length : 0,
        sheetIdPreview: process.env.GOOGLE_SHEET_ID ? process.env.GOOGLE_SHEET_ID.substring(0, 10) + '...' : 'not set'
      }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Test failed',
        details: error.message 
      }),
    };
  }
}; 