var express = require('express');
const mongodb = require("mongodb");

router.get('/readall', function(req, res) {
  req.app.locals.db.collection("recipes").find().toArray()
  .then(results => { 
    console.log(results);
    res.send(results);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send("Server error!");
  })
});

router.post('/write', function(req, res, err) {
  req.app.locals.db.collection("recipes").insertOne({
    "Id": req.body.Id, 
    "Title":req.body.Title,
    "ImageUrl":req.body.ImageUrl,
    "LikedBy":req.body.LikedBy
  })
  .then(
    res.send(JSON.stringify("Update ok"))
  )
  .catch((err) => {
    console.log(err);
    res.status(500).send("Server error!");
  })
});

module.exports = router;
