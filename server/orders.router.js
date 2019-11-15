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
      created: req.body.created
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

module.exports = router;

