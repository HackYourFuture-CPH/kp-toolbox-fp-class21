const knex = require('../../config/db');

const postUser = async (body) => {
  const user = await knex('users').insert(body);
  return user;
};

const getUserByFireBaseId = async (firebaseId) => {
  const user = await knex('users')
    .select('id', 'name', 'email', 'firebase_id', 'is_admin')
    .where('firebase_id', '=', firebaseId);
  return user;
};

module.exports = {
  postUser,
  getUserByFireBaseId,
};
