const faker = require("faker");


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE maps_id_seq RESTART WITH 1"),
    knex("maps")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("maps").insert([
          {
            map_name: "Best In St Henri",
            map_long: -73.5894242,
            map_lat: 45.4781832,
          },
          {
             map_name: "Best In Mile End",
            map_long: -73.6076878,
            map_lat: 45.5226903,
          },
          {
             map_name: "Best In Old Port",
            map_long: -73.5585531,
            map_lat: 45.5069719,
          },
          {
            map_name: "Best In NDG",
            map_long: -73.6259215,
            map_lat: 45.4733005,
          },
          {
             map_name: "Best In Downtown",
            map_long: -73.5867286,
            map_lat: 45.5257186,
          }
        ]);
      })
  ]);
};
