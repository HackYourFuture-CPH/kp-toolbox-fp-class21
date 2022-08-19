/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user_enquiry', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('surname');
    table.string('email').notNullable();
    table.string('message', 1500).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('user_enquiry');
};
