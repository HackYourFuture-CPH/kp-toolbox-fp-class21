/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.table('users', (table) => {
      table.boolean('is_admin').defaultTo(false);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.table('users', (table) => {
      table.dropColumn('is_admin');
    });
  };
  