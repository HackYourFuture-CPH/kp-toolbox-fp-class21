/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('name').notNullable();
    table.string('firebase_id').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('name');
    table.dropColumn('firebase_id');
  });
};
