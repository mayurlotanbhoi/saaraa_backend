const Rout = require("express").Router();
const { login_user } = require("./logic");

Rout.post("/login", login_user);

module.exports = Rout;
