exports.up = function(knex, Promise) {
  return knex.schema.createTable('points', function (table) {
    table.increments('point_id').primary();
    table.string('point_name');
    table.string('point_description');
    table.string('point_lat');
    table.string('point_long');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('points');
};
