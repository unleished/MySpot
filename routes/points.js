"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {

    let myPoint = {
      point_name: "Point A",
      point_description: "description",
      point_long: req.body.lng,
      point_lat: req.body.lat,
    };
  });
  return router;
}
