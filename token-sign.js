const jwt = require('jsonwebtoken');

const secret = 'myCat';
const payload = {
  sub: 1,
  role: '',
};

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
console.log(token);
