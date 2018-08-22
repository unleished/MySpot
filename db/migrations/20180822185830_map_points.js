exports.up = function(knex, Promise) {
  return knex.schema.createTable('map_points', function (table) {
    table.integer('map_id').references('id').on('maps').onDelete('cascade');
    table.integer('point_id').references('point_id').on('points').onDelete('cascade');

  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('map_points');
};
