const pokemonModel = require ('../Models/pokemon');
const formRes = require ('../Helpers/formRes');

module.exports = {
  getByName: (req, res) => {
    if (req.error) {
      res.json (req.error);
    }
    pokemonModel
      .getByName ()
      .then (response => formRes.getPokemon (res, response, 200))
      .catch (err => console.log (err));
  },
  postPokemon: (req, res) => {
    //   const bodyReq = req.body;
    const body = {
      ...req.body,
      created_at: Date.now (),
      updated_at: Date.now (),
    };
    // {name: 'pikachu', latitude: 20} => name='pikachu', latitude=20
    //   console.log (body);
    pokemonModel
      .postPokemon (body)
      .then (response => formRes.postPokemon (res, response, 201))
      .catch (err => console.log (err));
  },
};
