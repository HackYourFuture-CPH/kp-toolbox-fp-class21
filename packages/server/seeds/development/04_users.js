/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    { first_name: 'user1', last_name: 'lastname1', email: 'user1@gmail.com' },
    { first_name: 'user2', last_name: 'lastname2', email: 'user2@gmail.com' },
    { first_name: 'user3', last_name: 'lastname3', email: 'user3@gmail.com' },
  ]);
};
