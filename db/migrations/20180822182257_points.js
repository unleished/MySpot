exports.up = function(knex, Promise) {
  return knex.schema.createTable('points', function (table) {
    table.increments('point_id');
    table.string('point_location');
    table.string('point_name');
    table.string('point_type');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('points');
};
