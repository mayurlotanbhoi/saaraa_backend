const Rout = require("express").Router();
const { createUser } = require("./logic");

Rout.post("/Registation", createUser);

module.exports = Rout;
