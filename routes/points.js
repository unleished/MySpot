"use strict";

const express = require('express');
const router  = express.Router();

function createId(){
  return Math.floor((Math.random() * 1000) + 1);
}


module.exports = (knex) => {
  router.post("/", (req, res) => {
    let id = createId();

    let new_point = {
      point_id: id,
      point_name: "Point new",
      point_description: "description",
      point_long: req.body.lng,
      point_lat: req.body.lat,
    }

 let mapPointAdd = {
      map_id: req.body.id,
      point_id: id
    }
  Promise.all([
    knex('points')
    .insert(new_point)
    .then(function() {
      knex('map_points')
        .insert(mapPointAdd)
        .then(function() {
      res.status(201).send('full promises success');
      })
    })
])


  });

  return router;

}
