const Rout = require("express").Router();
const { creatCartLogic } = require("./logic");

Rout.post("/addCardDetails", creatCartLogic);

module.exports = Rout;
