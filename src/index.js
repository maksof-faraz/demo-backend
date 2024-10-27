const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Basic route
app.get('/', (req, res) => {
  res.send(`Hello, Worldddd! ${PORT}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;