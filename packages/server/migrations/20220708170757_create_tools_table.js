/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('tools', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('time_frame_min').notNullable(5);
    table.string('time_frame_max');
    table.string('group_size_min').notNullable(2);
    table.string('group_size_max');
    table.string('facilitation_level');
    table.string('materials');
    table.text('pitch');
    table.text('description');
    table.json('instructions');
    table.string('source');
    table.binary('picture');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('tools');
};
