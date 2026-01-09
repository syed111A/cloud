const express = require('express');
const recepients = require('./recepients');
const app = express();

// Serve static HTML files
app.use(express.static('public'));

// Health check
app.get('/health', (req, res) => {
  res.send('App is running');
});

// Show all donors
app.get('/recepients', (req, res) => {
  console.log("recepients endpoint called"); // log to console
  res.json(recepients);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
