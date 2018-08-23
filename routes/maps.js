"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("maps")
      // .then((resultText(results) => {
      //   res.json(results);
      .asCallback(function(err, rows) {
        if (err) return console.error(err);
        var mapDataObj = {
          mapData: rows
        }
        res.render('maps_index', mapDataObj);
    });
  });

  router.get("/:id", (req, res) => {

    Promise.all([
    knex
      .select("*")
      .from("maps")
      .where('id', req.params.id)
      // .then((resultText(results) => {
      //   res.json(results);
      .then(function(rows) {

      return rows;
        // res.json(rows);
        // res.render('maps_unique', mapDataObj);
      })

      .catch(function (err) {
        return console.error(err);
      }),

    knex('maps')
      .select('points.point_id', 'points.point_name', 'points.point_description', 'points.point_long', 'points.point_lat')
      .join('map_points', 'maps.id', '=', 'map_points.map_id')
      .join('points', 'points.point_id', '=', 'map_points.point_id')
      .where('maps.id', req.params.id)
      .then(function(pointRows) {

      return pointRows;
      })

    ])
    .then((result) => {
      var mapDataObj = {
        mapInfo: result[0],
        pointInfo: result[1]
      }
      res.render('maps_unique', mapDataObj);
      // res.json(mapDataObj);
    })

})

  // });




  return router;

}
