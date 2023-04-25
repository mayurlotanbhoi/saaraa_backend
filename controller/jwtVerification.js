const jwt = require("jsonwebtoken");

async function jwtVerify(req, res, next) {
  try {
    const token = req.cookies.jwtoken;
    if (!token) {
      res.status(401).json({ sms: "Authentication failed" });
      return;
    }
    const user = jwt.verify(token, process.env.SECRETE_KEY);
    if (!user.userName) {
      res.status(401).json({ sms: "Authentication failed" });
      return;
    }

    // req.email = user.email;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Authentication error" });
  }
}

module.exports = jwtVerify;
