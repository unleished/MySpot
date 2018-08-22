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
            map_name: faker.random.word(),
            map_location: faker.address.city(),
          },
          {
            map_name: faker.random.word(),
            map_location: faker.address.city(),
          },
          {
            map_name: faker.random.word(),
            map_location: faker.address.city(),
          },
          {
            map_name: faker.random.word(),
            map_location: faker.address.city(),
          },
          {
            map_name: faker.random.word(),
            map_location: faker.address.city(),
          }
        ]);
      })
  ]);
};
