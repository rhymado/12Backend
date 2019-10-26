const express = require ('express');
const pokemonController = require ('../Controllers/pokemon');

const Router = express.Router ();

Router.get ('/', pokemonController.getByName);
Router.post ('/', pokemonController.postPokemon);

module.exports = Router;
