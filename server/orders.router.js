const express = require("express");
const router = express.Router();
const {Order} = require("./order.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Order.find({});
  res.send(xs);
});

router.post("/", (req, res) => {
  const props = {
      fullName: req.body.fullName,
      burger: req.body.burger,
      drink: req.body.drink,
  };
  const item1 = new Order(props);
  item1.save(err => {
      if(err) {
          console.log("Error", err);
          res.sendStatus(500);
          return;
      }
      console.log("Success createOrder");
      res.sendStatus(201);
  });
});

router.get("/", (req, res) => {
  Order.find({}, function(err, items) {
      if(err) {
          console.log("Error: ", err);
          res.status(500).send(err);
          return;
      }
      res.send(items);
  });
});

router.get("/search", (req, res) => {
  Order.find(createSearchQuery(req.query), function(err, items) {
      if(err) {
          console.log("Error: ", err);
          res.status(500).send(err);
          return;
      }
      console.log(items);
      res.send(items);
  });
});

function createSearchQuery({fullName, burger, drink}) {
  const query = {};
  if(fullName.trim().length > 0) {
    query.fullName = fullName;
  }
  if(burger.trim().length > 0) {
    query.burger = burger;
  }
  if(drink.trim().length > 0) {
    query.drink = drink;
  }
  return query;
}

module.exports = router;

