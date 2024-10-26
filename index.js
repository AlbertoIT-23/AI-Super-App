if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const summarizeText = require('./summarize.js');
const generateImage = require('./generateImage.js');

app.use(express.json());
app.use(express.static('public'));

app.post('/summarize', (req, res) => {
  const text = req.body.text_to_summarize;
  summarizeText(text) 
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send('Error processing request');
    });
});

app.post('/generate-image', (req, res) => {
  const prompt = req.body.prompt;
  generateImage(prompt)
    .then(response => {
      res.set('Content-Type', 'image/png');
      res.send(response);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send('Error generating image');
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});