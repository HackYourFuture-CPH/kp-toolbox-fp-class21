/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('tools_categories', (table) => {
    table.increments();
    table.integer('tool_id').unsigned();
    table.foreign('tool_id').references('id').inTable('tools');
    table.integer('category_id').unsigned();
    table.foreign('category_id').references('id').inTable('categories');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('tools_categories');
};
