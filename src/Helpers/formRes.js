module.exports = {
  getPokemon: (res, response, status) => {
    const form = {
      status, // status: status
      response,
    };
    res.json (form);
  },
  postPokemon: (res, response, status) => {
    const form = {
      status,
      response,
    };
    res.json (form);
  },
};
