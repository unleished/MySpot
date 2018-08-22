"use strict";

const express = require('express');
const router  = express.Router();

function mapNames(rows) {
  let mapList = [];
  rows.forEach(row => {
    // console.log('result text: ', row.first_name, row.last_name);
    mapList.push(row);
  })
  return mapList;
}


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
          console.log('mapObject: ', mapDataObj);
          console.log("rows : " + rows[0]);
          console.log('mapData: ', mapDataObj.mapData);
          debugger
        res.render('maps_index', mapDataObj);
    });
  });





  return router;
}
