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

  router.get("/new", (req, res) => {
    var mapDataObj = {
      userId: req.cookies.user_id

      // mapData: rows
      // mapInfo: result[0],
      // pointInfo: result[1]
      }
      res.render("maps_new", mapDataObj);
  });

  router.get("/:id", (req, res) => {

    Promise.all([
      // this shows the map info by MAP ID
      knex
        .select("*")
        .from("maps")
        .where('id', req.params.id)
        .then(function(rows) {
        return rows;
        })
        .catch(function (err) {
          return console.error(err);
        }),

      // this shows point data based on the MAP ID in the joined map_points table.
      knex('maps')
        .select('points.point_id', 'points.point_name', 'points.point_description', 'points.point_long', 'points.point_lat')
        .join('map_points', 'maps.id', '=', 'map_points.map_id')
        .join('points', 'points.point_id', '=', 'map_points.point_id')
        .where('maps.id', req.params.id)
        .then(function(pointRows) {
        return pointRows;
        }),
      knex
        .select("map_id")
        .from("favorite")
        .where(function() {
          this.where("user_id", req.cookies.user_id).andWhere("map_id", req.params.id)
        })
        .then(function(rows) {
          console.log('rows: ', rows)
          return rows;
        })
        .catch(function (err) {
          return console.error(err);
        })
    ])
    //this returns the map and map point info to the ejs
    .then((result) => {
      var mapDataObj = {
        mapInfo: result[0],
        pointInfo: result[1],
        hasFavorite: result[2].length === 0 ? false : result[2]
      }
      console.log(mapDataObj);
      res.render('maps_unique', mapDataObj);
    })
    .catch((err) => {
      console.log(err);
    })
  }); //end of map id GET request

  router.post("/", (req, res) => {

    var userId = req.cookies.user_id
    let new_map = {
      map_name: req.body.newMapName,
      map_long: req.body.lng,
      map_lat: req.body.lat
    }

    Promise.all([
      knex('maps')
      .insert(new_map)
      .returning('id')
      .then(function(id) {
        let userMapAdd = {
             map_id: Number(id),
             user_id: userId
           }
        console.log('userMapAdd Obj: ', userMapAdd);
        knex('user_map')
          .insert(userMapAdd)
          .then(function() {
        res.status(201).send('full promises success');
        })
      })
    ])
  })

  return router;
}
