const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./src/routes.js');
const PORT = process.env.PORT || 4000;

// Basic route
app.get('/', (req, res) => {
  res.send(`Hello! ${PORT}`);
});


app.use('/api', routes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;