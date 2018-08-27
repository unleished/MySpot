const faker = require("faker");


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex.raw("ALTER SEQUENCE points_point_id_seq RESTART WITH 1"),
    knex("points")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("points").insert([
          {
            point_name: "Le Cartet",
            point_description: "French bistro dishes & lattes served in a loftlike space that also offers gourmet food products.",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6253689,
            point_lat: 45.4994113,
          },
          {
            point_name: "Holder",
            point_description: "Vibrant brasserie serving French cuisine & weekend brunch in a large hall with tall windows.",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5605949,
            point_lat: 45.4979977,
          },
          {
            point_name: "Monopole",
            point_description: "Happy Hour food with great coffee",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5605949,
            point_lat: 45.4979977,
          },
          {
            point_name: "Crew Collective & Cafe",
            point_description: "Cosy, Casual, Vegetarian options in an old bank building.",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5617107,
            point_lat: 45.4991558,
          },
          {
            point_name: "Olive and Gourmando",
            point_description: "Trendy vibes and classic brunch items",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5867286,
            point_lat: 45.5257186,
          },
           {
            point_name: "Hopkins",
            point_description: "Great cocktails cosy, traditional brunch",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6249582,
            point_lat: 45.473313,
          },
           {
            point_name: "St Viateur Bagel and Cafe Monkland",
            point_description: "Casual sandwich spot showcasing famous bagels and pizza from wood-fired ovens",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6277691,
            point_lat: 45.4737494,
          },
           {
            point_name: "Porco",
            point_description: "Italian deli sanwiches",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6277691,
            point_lat: 45.4737494,
          },
           {
            point_name: "Cafe Vasco da Gama",
            point_description: "Intimate eatery featuring Protuguese gourmet sandwiches, salads and tarts",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5774801,
            point_lat: 45.4997122,
          },
           {
            point_name: "Universel Grilladeso",
            point_description: "Breakfast and casual fare served all day in slick place",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5761712,
            point_lat: 45.4999828,
          },
           {
            point_name: "H4C",
            point_description: "Innovative new canadian fare served in chic dining renovated 19th century post office",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.58918,
            point_lat: 45.4772546,
          },
           {
            point_name: "Arthurs Nosh Bar",
            point_description: "Traditional Jewish deli serving breakfast and sandwiches in bright, stylish place",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5932355,
            point_lat: 45.4711305,
          },
           {
            point_name: "Burgundy Lion",
            point_description: "Traditional British brunch food with tap beer.",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5812621,
            point_lat: 45.4805796,
          },
           {
            point_name: "Butterblume",
            point_description: "Airy, brick-walled cafe with a small menu of open faced sandwiches, fresh pastries plus brunch",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6082231,
            point_lat: 45.5236395,
          },
           {
            point_name: "Larry's",
            point_description: "Amazing service with briish style brunch menu items.",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6082231,
            point_lat: 45.5236395,
          },
           {
            point_name: "Barbounya",
            point_description: "Rustic-chic eatery plating sophisticated spins on Turkish cuisine",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6082231,
            point_lat: 45.5236395,
          },
           {
            point_name: "Sparrow",
            point_description: "Vintage inspired bar with wooden pew seats and exposed brick walls serving brunch",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.5995971,
            point_lat: 45.522166,
          },
           {
            point_name: "Farine",
            point_description: "Modern spin on italian cuisine serving brunch",
            point_image: "http://i.stack.imgur.com/g672i.png",
            point_long: -73.6064421,
            point_lat: 45.5229327,
          }
        ]);
      })
  ]);
};


