const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookiParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const jwtVerification = require("./controller/jwtVerification");
const app = express();

const port = process.env.PORT || 5000;

app.use("/public", express.static("public"));
app.use(express.json());
app.use(cookiParser());

app.use(
  cors({
    origin: [
      "*",
      "http://127.0.0.1:5501",
      "http://127.0.0.1:5500",
      "https://meghranjan.com",
    ],
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    credentials: true,
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    exposedHeaders: ["*", "Authorization"],
  })
);

const limiter = rateLimit({
  windowMs: 1000, // 1 minutes
  max: 5, // limit each IP to 100 requests per windowMs
});

// apply to all requests
app.use(limiter);

// app.use(jwtVerification);
// omport all Rout here
const creatCart = require("./controller/addCart_Details.js/Rout");
const getProductDetails = require("./controller/getCart_Details/Rout");
const createUser = require("./controller/createUser/Rout");
const login = require("./controller/login/Rout");
const logOut = require("./controller/logout");

app.use("/user", login);
app.use("/user", creatCart);
app.use("/user", createUser);
app.use("/user", jwtVerification, logOut);
app.use("/user", jwtVerification, getProductDetails);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
