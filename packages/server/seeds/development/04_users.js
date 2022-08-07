/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('users')
    .insert([
      {
        id: 1,
        first_name: 'user1',
        last_name: 'lastname1',
        email: 'user1@gmail.com',
      },
      {
        id: 2,
        first_name: 'user2',
        last_name: 'lastname2',
        email: 'user2@gmail.com',
      },
      {
        id: 3,
        first_name: 'user3',
        last_name: 'lastname3',
        email: 'user3@gmail.com',
      },
    ])
    .onConflict('id')
    .merge();
};
