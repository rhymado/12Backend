const express = require ('express');
const pokemonController = require ('../Controllers/pokemon');

const auth = require ('../Helpers/Middleware/auth');
const Router = express.Router ();

Router.get ('/', auth.verifyAdmin, pokemonController.getByName);
Router.get ('/nojwt', auth.decode, pokemonController.getByName);
Router.post ('/', pokemonController.postPokemon);

module.exports = Router;
