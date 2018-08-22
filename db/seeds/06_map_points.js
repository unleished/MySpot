const faker = require("faker");

exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return Promise.all([
   knex("map_points")
     .del()
     .then(function() {
       // Inserts seed entries
       return knex("map_points").insert([
         {
           map_id: faker.random.number({ min: 1, max: 5 }),
           point_id: faker.random.number({ min: 1, max: 5 })
         },
         {
           map_id: faker.random.number({ min: 1, max: 5 }),
           point_id: faker.random.number({ min: 1, max: 5 })
         },
         {
           map_id: faker.random.number({ min: 1, max: 5 }),
           point_id: faker.random.number({ min: 1, max: 5 })
         },
         {
           map_id: faker.random.number({ min: 1, max: 5 }),
           point_id: faker.random.number({ min: 1, max: 5 })
         },
         {
           map_id: faker.random.number({ min: 1, max: 5 }),
           point_id: faker.random.number({ min: 1, max: 5 })
         }
       ]);
     })
 ]);
};
