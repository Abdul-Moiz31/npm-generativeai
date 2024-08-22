// test.js
const { generateText } = require('./src/index'); 

const prompt = 'Tell me a story Lion King.';


generateText(apiKey, prompt)
  .then(response => {
    console.log('Generated text:', response);
  })
  .catch(error => {
    console.error('Error generating text:', error);
  });
  const { generateText } = require('../src/index');
require('dotenv').config(); 

const apiKey = process.env.GOOGLE_API_KEY;

describe('Google Generative AI API', () => {
  it('should generate text from a prompt', async () => {
    const prompt = 'What is the capital of France?';
    const result = await generateText(apiKey, prompt);
    expect(result).toBeDefined();
    console.log(result);
  });
});
