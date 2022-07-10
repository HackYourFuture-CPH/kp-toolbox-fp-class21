/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tools_categories').del();
  await knex('tools_categories').insert([
    {
      tool_id: 1,
      category_id: 3,
    },
    {
      tool_id: 2,
      category_id: 1,
    },
    {
      tool_id: 3,
      category_id: 1,
    },
    {
      tool_id: 3,
      category_id: 3,
    },
    {
      tool_id: 4,
      category_id: 1,
    },
    {
      tool_id: 4,
      category_id: 4,
    },
    {
      tool_id: 5,
      category_id: 3,
    },
    {
      tool_id: 6,
      category_id: 3,
    },
    {
      tool_id: 6,
      category_id: 1,
    },
  ]);
};
