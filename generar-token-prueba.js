// Script SOLO PARA PRUEBAS, mientras el login real (modulo de usuarios) no exista.
// Genera un token JWT firmado con el mismo JWT_SECRET del .env, para poder
// probar los endpoints protegidos de cultivos-lotes sin depender de nadie mas.
//
// Uso:
//   node generar-token-prueba.js

require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

if (!secret) {
  console.error('No se encontro JWT_SECRET en el .env');
  process.exit(1);
}

const payload = {
  sub: 1,
  email: 'prueba@agro.com',
  rol: 'admin',
};

const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log('\nToken de prueba generado (valido por 1 hora):\n');
console.log(token);
console.log('\nUsalo en Postman asi:');
console.log('Header  Authorization: Bearer ' + token);
console.log('');
