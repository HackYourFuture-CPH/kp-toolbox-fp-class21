/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('first_name');
    table.dropColumn('last_name');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
  });
};
