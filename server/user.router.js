const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

router.post("/add", async (req, res) => {
  try {
    const updateRes = await User.updateOne({personalCode: req.body.personalCode}, req.body, {upsert: true});
    console.log(updateRes.n);
    console.log(updateRes.nModified);
    res.sendStatus(200);
  }
  catch(err) {
    res.sendStatus(500);
  }
});

module.exports = router;

