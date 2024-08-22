require('dotenv').config(); 
const axios = require('axios');

// Environment variable for API key and base URL
const apiKey = process.env.GOOGLE_API_KEY;
const BASE_URL = process.env.BASE_URL; 
const PROJECT_ID = 'npm package generative-ai'; 


async function generateText(prompt) {
  try {
    const response = await axios.post(
      `${BASE_URL}/generate`, // EndPoint
      { prompt },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.error('Error generating text:', error.response?.data || error.message);
    throw error; 
  }
}

module.exports = {
  generateText,
};
