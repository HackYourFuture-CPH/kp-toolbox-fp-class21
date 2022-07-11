/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('favourites', (table) => {
    table.increments();
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.integer('tool_id').unsigned();
    table.foreign('tool_id').references('id').inTable('tools');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('favourites');
};
