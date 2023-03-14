// required dependencies
const path = require('path');
const express = require('express');

// create express app
const app = express();

// dotenv package
require('dotenv').config();

// port number
const PORT = process.env.PORT || 3003;

// environment
const NODE_ENV = process.env.NODE_ENV;

// middleware
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

// render react app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', index.html));
});

// run server
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}\nenv: ${NODE_ENV}`);
});
