/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('categories').del();
  await knex('categories').insert([
    {
      name: 'Team',
    },
    {
      name: 'Action',
    },
    {
      name: 'Innovation',
    },
    {
      name: 'Energizer',
    },
  ]);
};
