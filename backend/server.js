// import required modules
const express = require('express');

// Create Express application
const app = express();

// Define a sample route
app.get('/', (req, res) => {
  res.send("Hello Ashvi")
});

// Setup PORT for the server
const PORT = process.env.PORT || 8000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});