// const namaVariabel = require('namaPackage')
require ('dotenv').config (); // require('dotenv/config')
const express = require ('express');
const logger = require ('morgan');
const bodyParser = require ('body-parser');
const router = require ('./src/Routes/index');
const cors = require ('cors');
const helmet = require ('helmet');

const auth = require ('./src/Helpers/Middleware/auth');

const app = express ();

app.listen (8000, () => {
  console.log ('Server is Running');
});

app.use (cors ()); //untuk memanage CORS, entah siapa yang di enable, siapa yg diblacklist
// allow all
app.use (helmet.xssFilter ());
app.use (logger ('dev'));
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: false}));

app.use ('/', auth.login, router); // localhost:8000/

module.exports = app;
