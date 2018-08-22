exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_map', function (table) {
    table.integer('user_id').references('id').on('users').onDelete('cascade');
    table.integer('map_id').references('id').on('maps').onDelete('cascade');

  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_map');
};
