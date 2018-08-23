exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps', function (table) {
    table.increments('id').primary();
    table.string('map_name');
    table.string('map_lat');
    table.string('map_long');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps');
};
