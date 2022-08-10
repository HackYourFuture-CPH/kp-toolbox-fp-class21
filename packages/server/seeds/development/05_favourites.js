/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('favourites')
    .insert([
      { user_id: 1, tool_id: 1 },
      { user_id: 2, tool_id: 2 },
      { user_id: 3, tool_id: 3 },
    ])
    .onConflict('id')
    .merge();
};
