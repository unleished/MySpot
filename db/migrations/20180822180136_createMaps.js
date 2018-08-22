exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps', function (table) {
    table.increments('id');
    table.string('map_name');
    table.string('map_location');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps');
};
