const faker = require("faker");

exports.seed = function(knex, Promise) {
 // Deletes ALL existing entries
 return Promise.all([
   knex("favorite")
     .del()
     .then(function() {
       // Inserts seed entries
       return knex("favorite").insert([
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
