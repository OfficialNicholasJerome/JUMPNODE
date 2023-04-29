const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Serve static files in the "public" folder
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Redirect to home page
app.get('/', (req, res) => {
  res.redirect('/home');
});

// Route for the home page
app.get(['/home'], function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Route for the about us page
app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/public/aboutus.html');
});

// Route for the contact page
app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/public/contact.html');
});

// Handle POST requests for the contact page
app.post('/contact', function(req, res) {
  const email = req.body.eaddress;
  fs.appendFileSync('emails.txt', email + '\n');
  res.redirect('/contact');
});

// Start the server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
