const express = require('express');
const donors = require('./donors');
const app = express();

// Serve static HTML files
app.use(express.static('public'));

// Health check
app.get('/health', (req, res) => {
  res.send('App is running');
});

// Show all donors
app.get('/donors', (req, res) => {
  console.log("Donors endpoint called"); // log to console
  res.json(donors);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
