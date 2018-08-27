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
           map_id: 1,
           point_id: 11
         },
         {
           map_id: 1,
           point_id: 12
         },
         {
           map_id: 3,
           point_id: 13
         },
         {
           map_id: 2,
           point_id: 14
         },
         {
           map_id: 2,
           point_id: 15
         },
         {
           map_id: 2,
           point_id: 16
         },
         {
           map_id: 2,
           point_id: 17
         },
         {
           map_id: 2,
           point_id: 18
         },
         {
           map_id: 3,
           point_id: 1
         },
         {
           map_id: 3,
           point_id: 2
         },
         {
           map_id: 3,
           point_id: 3
         },
         {
           map_id: 3,
           point_id: 4
         },
         {
           map_id: 3,
           point_id: 5
         },
         {
           map_id: 4,
           point_id: 6
         },
         {
           map_id: 4,
           point_id: 7
         },
         {
           map_id: 4,
           point_id: 8
         },
         {
           map_id: 5,
           point_id: 9
         },
         {
           map_id: 5,
           point_id: 10
         }
       ]);
     })
 ]);
};
