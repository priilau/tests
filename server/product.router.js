const express = require("express");
const router = express.Router();
const {Product} = require("./product.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Product.find({});
  res.send(xs);
});

router.get("/random", async (req, res)=>{
  const xs = await Product.find({});
  const r = getRandomInt(0, xs.length - 1);
  res.status(200).send(xs[r])
});

router.get("/similar/:productId", async (req, res)=>{
  const product = await Product.findById({"_id": mongoose.Types.ObjectId(req.params.productId)});
  const brand = product.title.split(" ")[0];
  const similarItems = await Product.find({"title": {$regex: brand, $options: 1}});
  res.status(200).send(similarItems);
});

module.exports = router;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
