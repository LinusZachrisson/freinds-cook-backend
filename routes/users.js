var express = require('express');
var router = express.Router();
const mongodb = require("mongodb");

router.get('/getusers', function(req, res) {
  req.app.locals.db.collection("users").find().toArray()
  .then(results => { 
    console.log(results);
    res.send(results);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send("Server error!");
  })
});

module.exports = router;
