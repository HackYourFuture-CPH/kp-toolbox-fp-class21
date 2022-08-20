/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('users')
    .insert([
      {
        'id': '1',
        'name': 'Somayeh Davari',
        'email': 'somayehdvr@gmail.com',
        'firebase_id': 'mGB238KDl6hOmuVRBVekIjwqv493',
        'is_admin': true,
      },
      {
        'id': '2',
        'name': 'Somayeh Davari',
        'email': 'somayedavary@gmail.com',
        'firebase_id': 'eDY00EtawdMMdINupXtNaL7iTXF3',
        'is_admin': false,
      },
    ])
    .onConflict('id')
    .merge();
};
