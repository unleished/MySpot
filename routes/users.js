"use strict";

const express = require('express');
const router  = express.Router();



function resultText(rows) {
  let list = [];
  rows.forEach(row => {
    // console.log('result text: ', row.first_name, row.last_name);
    list.push(row);
  })
  return list;
}


module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      // .then((results) => {
      //   res.json(results);
      //   console.log('users.js results: ',results);
        .asCallback(function(err, rows) {
          if (err) return console.error(err);
          // resultText(rows);
          var userDataObj = {
            userData: rows
          }
          res.render('users_unique', userDataObj);
          });
  });



  return router;
}
