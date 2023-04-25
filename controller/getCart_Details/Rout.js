const Rout = require("express").Router();
const { getproductDetails_Logic } = require("./logic");

Rout.get("/getProductDetails/:categoryId", getproductDetails_Logic);

module.exports = Rout;
