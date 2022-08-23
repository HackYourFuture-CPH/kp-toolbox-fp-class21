/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('tools_categories')
    .insert([
      {
        id: 1,
        tool_id: 1,
        category_id: 3,
      },
      {
        id: 2,
        tool_id: 2,
        category_id: 1,
      },
      {
        id: 3,
        tool_id: 3,
        category_id: 1,
      },
      {
        id: 4,
        tool_id: 3,
        category_id: 3,
      },
      {
        id: 5,
        tool_id: 4,
        category_id: 1,
      },
      {
        id: 6,
        tool_id: 4,
        category_id: 4,
      },
      {
        id: 7,
        tool_id: 5,
        category_id: 3,
      },
      {
        id: 8,
        tool_id: 6,
        category_id: 3,
      },
      {
        id: 9,
        tool_id: 6,
        category_id: 1,
      },
      {
        id: 10,
        tool_id: 7,
        category_id: 1,
      },
      {
        id: 11,
        tool_id: 7,
        category_id: 3,
      },
      {
        id: 12,
        tool_id: 8,
        category_id: 2,
      },
      {
        id: 13,
        tool_id: 8,
        category_id: 3,
      },
      {
        id: 14,
        tool_id: 9,
        category_id: 1,
      },
      {
        id: 15,
        tool_id: 10,
        category_id: 3,
      },
      {
        id: 16,
        tool_id: 11,
        category_id: 4,
      },
      {
        id: 17,
        tool_id: 11,
        category_id: 1,
      },
      {
        id: 18,
        tool_id: 12,
        category_id: 3,
      },
    ])
    .onConflict('id')
    .merge();
};
