/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('categories')
    .insert([
      {
        id: 1,
        name: 'Team',
      },
      {
        id: 2,
        name: 'Action',
      },
      {
        id: 3,
        name: 'Innovation',
      },
      {
        id: 4,
        name: 'Energizer',
      },
    ])
    .onConflict('id')
    .merge();
};
