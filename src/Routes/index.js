const express = require ('express');
const pokemon = require ('./pokemon');

const Router = express.Router ();

Router.use ('/pokemon', pokemon);

module.exports = Router;
