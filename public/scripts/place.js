
"use strict";

//const express = require('express');
//const axios = require('axios');



const key = "&key=AIzaSyDxv_lcD-DJGOKruhMUYLFKU_LPzP1z8bQ";


function addImage(){

  function makePhoto(){
  var query = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
  var name = "olive+et+gourmando"; //"123+main+street";
           return query + name + key;
  }

  var myURL = makePhoto();

  function getPhotoUrl(photo_reference){
    var query ="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
    return query + photo_reference + key;
  }

  axios.get(myURL)
    .then(function (response) {
      var url = getPhotoUrl(response.data.results[0].photos[0].photo_reference);
      axios.get(url)
        .then(function (response){
          console.log(response.request.res.responseUrl);
        })
        .catch(function(error){
          console.log(error);
        })
    })
    .catch(function (error) {
      console.log(error);
    });
}


