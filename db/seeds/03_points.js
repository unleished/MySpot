const faker = require("faker");


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE points_point_id_seq RESTART WITH 1"),
    knex("points")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("points").insert([
          {
            point_name: "Olive and Gourmando",
            point_description: "Trendy vibes and classic brunch items",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5894242,
            point_lat: 45.4781832,
          },
          {
            point_name: "Olive and Gourmando",
            point_description: "Trendy vibes and classic brunch items",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6076878,
            point_lat: 45.5226903,
          },
          {
            point_name: "Olive and Gourmando",
            point_description: "Trendy vibes and classic brunch items",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5585531,
            point_lat: 45.5069719,
          },
          {
            point_name: "Olive and Gourmando",
            point_description: "Trendy vibes and classic brunch items",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6259215,
            point_lat: 45.4733005,
          },
          {
            point_name: "Olive and Gourmando",
            point_description: "Trendy vibes and classic brunch items",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5867286,
            point_lat: 45.5257186,
          }
        ]);
      })
  ]);
};


