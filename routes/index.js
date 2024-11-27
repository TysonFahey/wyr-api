const express = require("express");

const router = express.Router();

const randomWYRQuestion = require('../model/wyr_questions') // what is exported from wyr_questions is accessable through this variable

router.get('/', function(req, res, next){
    res.send('placeholder for home page')
}) // create a function that is a response which sends to the home page '/'

// get request for getting would you rather quesion
// request, response, next
router.get("/wyr", function (req, res, next) {
//   const wyr = {
//     question: "Live in house or cabin",
//     "answer 1": "house",
//     answer2: "cabin",
//   };

const wyr = randomWYRQuestion() // call function 
res.json(wyr)  // return as response

  // send the data as a response using
  res.json(wyr); // turn the objects into json that can be sent over network
});

module.exports = router;
