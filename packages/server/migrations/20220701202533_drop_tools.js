/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.dropTable('tools');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.createTable('tools', (table) => {
    table.increments();
    table.integer('category_id').references('id').inTable('categories');
    table.string('name').notNullable();
    table.string('time_frame').notNullable();
    table.string('group_size').notNullable();
    table.string('facilitation_level').notNullable();
    table.string('material').notNullable();
    table.text('description').notNullable();
    table.text('steps').notNullable();
    table.string('tool_origin').notNullable();
    table.integer('price').notNullable();
    table.binary('picture');
    table.enu('status', ['active', 'not_active']);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};
