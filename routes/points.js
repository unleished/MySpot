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

  router.post("/edit", (req, res) => {
    console.log('req body: ', req.body);

        Promise.all([
        knex('points')
        // .update(update_point)
        .update('point_name', req.body.point_name)
        .update('point_description', req.body.point_description)
        .update('point_lat', req.body.point_lat)
        .update('point_long', req.body.point_long)
        .where('point_id', req.body.point_id)
        .then(function() {
          res.status(201).send('full promises success');
        })
      ])
  })

  router.post("/delete", (req, res) => {
    console.log('req body: ', req.body);

        Promise.all([
        knex('points')
        .where('point_id', req.body.point_id)
        .del()
        .then(function() {
          res.status(201).send('full promises success');
        })
      ])
  })

  router.get("/:id", (req, res) =>{
    Promise.all([
    knex('points')
      .where('point_id', req.params.id)
      // .returning('point_name')
      .then(function(onePoint) {
        console.log('onePoint: ', onePoint)

        res.json(onePoint[0])
      })
    ])
})


  return router;

}
