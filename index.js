// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Another route
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
