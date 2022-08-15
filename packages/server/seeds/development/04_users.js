/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('users')
    .insert([
      {
        id: '1',
        name: 'user1',
        email: 'user1@gmail.com',
        firebase_id: 'test1',
      },
      {
        id: '2',
        name: 'user2',
        email: 'user2@gmail.com',
        firebase_id: 'test2',
      },
      {
        id: '3',
        name: 'user3',
        email: 'user3@gmail.com',
        firebase_id: 'test3',
      },
    ])
    .onConflict('id')
    .merge();
};
