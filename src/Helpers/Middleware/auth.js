const jwt = require ('jsonwebtoken');

const login = (req, res, next) => {
  const token = jwt.sign (
    {
      username: 'user',
      password: 'admin',
      level: 5,
      tier: 3,
    },
    'arkademyJogja',
    {expiresIn: '1h', issuer: 'CEO'}
  );
  req.token = token;
  console.log ('jwt sign', token);
  next ();
};

const decode = (req, res, next) => {
  const token = req.token;
  const decode = jwt.decode (token);
  console.log ('jwt decode', decode);
  next ();
};

const verifyAdmin = (req, res, next) => {
  const token = req.token;
  //   const verify = jwt.verify (token, 'arkademyJogja', {issuer: 'CEO'});
  //   console.log ('jwt verify', verify);
  try {
    jwt.verify (token, 'arkademyJogja', {issuer: 'CEO'});
  } catch (error) {
    req.error = error;
  }
  next ();
};

module.exports = {
  login,
  decode,
  verifyAdmin,
};
