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

    knex
      .select("*")
      .from("maps")
      .where('id', req.params.id)
      // .then((resultText(results) => {
      //   res.json(results);
      .asCallback(function(err, rows) {
        if (err) return console.error(err);
        var mapDataObj = {
          mapInfo: rows,
        }

        res.render('maps_unique', mapDataObj);
    });
  });




  return router;
}
