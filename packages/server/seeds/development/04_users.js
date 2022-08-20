/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('users')
    .insert([
      {
        id: '1',
        name: 'Somayeh Davari',
        email: 'somayehdvr@gmail.com',
        firebase_id: 'mGB238KDl6hOmuVRBVekIjwqv493',
        is_admin: true,
      },
      {
        id: '2',
        name: 'Somayeh Davari',
        email: 'somayedavary@gmail.com',
        firebase_id: 'eDY00EtawdMMdINupXtNaL7iTXF3',
        is_admin: false,
      },
      {
        id: '3',
        name: 'Svitlana Burlaka',
        email: 'svit0199@spcmidt.dk',
        firebase_id: 'tMcFLlD0PBNgek2yhfwSZjMo3rR2',
        is_admin: false,
      },
    ])
    .onConflict('id')
    .merge();
};
