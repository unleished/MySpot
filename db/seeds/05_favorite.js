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
           user_id: 1,
           map_id: 5
         },
         {
           user_id: 1,
           map_id: 2
         },
         {
           user_id: 2,
           map_id: 2
         },
         {
           user_id: 2,
           map_id: 4
         },
         {
           user_id: 4,
           map_id: 1
         }
       ]);
     })
 ]);
};
