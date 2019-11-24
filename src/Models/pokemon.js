const db = require ('../Configs/db');

module.exports = {
  getByName: () => {
    return new Promise ((resolve, reject) => {
      db.query (
        `SELECT pokemons.id, pokemons.name, pokemons.image_url, categories.name AS category FROM pokemons JOIN categories ON categories.id = pokemons.category_id`,
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
