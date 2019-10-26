const db = require ('../Configs/db');

module.exports = {
  getByName: pokemonName => {
    return new Promise ((resolve, reject) => {
      db.query (
        `SELECT * FROM pokemons WHERE name=?`,
        [pokemonName],
        (err, response) => {
          if (!err) {
            resolve (response);
          } else {
            reject (err);
          }
        }
      );
    });
  },
  postPokemon: body => {
    return new Promise ((resolve, reject) => {
      db.query ('INSERT INTO pokemons SET ?', [body], (err, response) => {
        if (!err) {
          resolve (response);
        } else {
          reject (err);
        }
      });
    });
  },
};
