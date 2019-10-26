// const namaVariabel = require('namaPackage')
require ('dotenv').config (); // require('dotenv/config')
const express = require ('express');
const logger = require ('morgan');
const bodyParser = require ('body-parser');
const router = require ('./src/Routes/index');

const app = express ();

app.listen (8000, () => {
  console.log ('Server is Running');
});

app.use (logger ('dev'));
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: false}));

app.use ('/', router); // localhost:8000/

module.exports = app;
