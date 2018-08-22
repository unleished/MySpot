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
            point_name: faker.random.word(),
            point_location: faker.address.city(),
            point_type: faker.commerce.productName(),
          },
           {
            point_name: faker.random.word(),
            point_location: faker.address.city(),
            point_type: faker.commerce.productName(),
          },
          {
            point_name: faker.random.word(),
            point_location: faker.address.city(),
            point_type: faker.commerce.productName(),
          },
           {
            point_name: faker.random.word(),
            point_location: faker.address.city(),
            point_type: faker.commerce.productName(),
          },
           {
            point_name: faker.random.word(),
            point_location: faker.address.city(),
            point_type: faker.commerce.productName(),
          }
        ]);
      })
  ]);
};
