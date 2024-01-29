exports.up = async function(knex) {
  const hasTable = await knex.schema.hasTable('employees');
  if(!hasTable) {
    return knex.schema.createTable('employees', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description');
      table.string('position');
    });
  };
};
exports.down = function(knex) {
  return knex.schema.dropTable('employees');
};
