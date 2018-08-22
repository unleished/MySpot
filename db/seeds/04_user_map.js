const faker = require("faker");

exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return Promise.all([
   knex("user_map")
     .del()
     .then(function() {
       // Inserts seed entries
       return knex("user_map").insert([
         {
           user_id: faker.random.number({ min: 1, max: 5 }),
           map_id: faker.random.number({ min: 1, max: 5 })
         },
         {
           user_id: faker.random.number({ min: 1, max: 5 }),
           map_id: faker.random.number({ min: 1, max: 5 })
         },
         {
           user_id: faker.random.number({ min: 1, max: 5 }),
           map_id: faker.random.number({ min: 1, max: 5 })
         },
         {
           user_id: faker.random.number({ min: 1, max: 5 }),
           map_id: faker.random.number({ min: 1, max: 5 })
         },
         {
           user_id: faker.random.number({ min: 1, max: 5 }),
           map_id: faker.random.number({ min: 1, max: 5 })
         }
       ]);
     })
 ]);
};
