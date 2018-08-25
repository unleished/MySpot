"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.post("/", (req, res) => {

    let new_fav = {
      user_id: req.cookies.user_id,
      map_id: req.body.favMapId
    }

  Promise.all([
    knex('favorite')
    .insert(new_fav)
    .catch((err) => {
      console.log('error adding favorite');
      })
    .then(function() {
      res.status(201).send('favorite added!');
      })
    ])
  })
  return router;
}
