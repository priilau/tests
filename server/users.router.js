const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

router.post("/add", (req, res) => {
  const props = {
      fullName: req.body.fullName,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
  };
  const user = new User(props);
  user.save(err => {
      if(err) {
          console.log("Error", err);
          res.sendStatus(500);
          return;
      }
      console.log("Success addUser");
      res.sendStatus(201);
  });
});

module.exports = router;

