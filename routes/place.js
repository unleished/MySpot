"use strict";

const express = require('express');
const router  = express.Router();

const axios = require('axios');
// let baseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
// let lat = 45.4781832;
// let long = -73.5916129;
 let key = "&key=AIzaSyDxv_lcD-DJGOKruhMUYLFKU_LPzP1z8bQ";


// function makeUrl(lat, long){
// return baseURL + lat + "," + long + key;
// }

// function makePlaceDetails(){
//   let url= "https://maps.googleapis.com/maps/api/place/details/json?placeid=";
//   let placeId = "ChIJQTBVxp0QyUwRxmOOFD3mxx8";
//   let endUrl = "&fields=name,photo";

//   return url + placeId + endUrl + key;

// }



function makePhoto(){
var query = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
var address ="123+main+street";

return query + address + key;
}

var myURL = makePhoto();

function getPhotoUrl(photo_reference){
var query ="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=";
return query + photo_reference + key;
}

// CmRaAAAAFDiRyiaUxfu1ZoYEkX4Eiv-omTxO3m3uV5WLm3mWNf9ELGgjYcS-E2Uglh7mzdPCpvf7DEd1ORkHserhM6_xkNk5yUtwEU9QnjH1cJ8mSLAkWnDXK8yXiP3qtecwSh2nEhAiVW5qf2U08Nf1hESk-jkTGhQHjTBfzBPUfXuXCC3MsClA32ZHLg"
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

