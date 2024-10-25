const axios = require('axios');

async function generateImage(prompt) {
  let data = JSON.stringify({
    "inputs": prompt
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
    },
    data: data,
    responseType: 'arraybuffer'
  };

  try {
    const response = await axios.request(config);
    return response.data;
  }
  catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = generateImage;