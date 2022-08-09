/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      name: 'user1',
      email: 'user1@gmail.com',
      firebase_id: 'testId1',
    },
    {
      name: 'user2',
      email: 'user2@gmail.com',
      firebase_id: 'testId2',
    },
    {
      name: 'user3',
      email: 'user3@gmail.com',
      firebase_id: 'testId3',
    },
  ]);
};
