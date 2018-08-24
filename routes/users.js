"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
 router.get("/", (req, res) =>{
  res.send("helloeee");
 })

  router.get("/:id", (req, res) => {
    Promise.all([
      knex
        .select("*")
        .from("users")
        .where('id', req.params.id)
        .then(function(rows) {
          return rows;
        })
        .catch(function (err) {
          return console.error(err);
        }),
      knex('users')
        .select('maps.id', 'maps.map_name')
        .join('user_map', 'users.id', '=', 'user_map.user_id')
        .join('maps', 'maps.id', '=', 'user_map.map_id')
        .where('users.id', req.params.id)
        .then(function(userMapRows) {
          return userMapRows;
        }),
      knex('users')
        .select('maps.id', 'maps.map_name')
        .join('favorite', 'users.id', '=', 'favorite.user_id')
        .join('maps', 'maps.id', '=', 'favorite.map_id')
        .where('users.id', req.params.id)
        .then(function(userFavMaps) {
          return userFavMaps;
        })
      ])
      .then((result) => {
        var userDataObj = {
          userData: result[0],
          userMapRows: result[1],
          userFavs: result[2].length === 0 ? false : result[2]
        }
        res.render('users_unique', userDataObj);
      })
    })
  return router;
}
