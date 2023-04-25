const { checkUserExist } = require("../createUser/query");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login_user: (req, res) => {
    const { userName, Password } = req.body;

    checkUserExist(userName, async (error, result) => {
      if (error) {
        console.log(error);
        res.json({ sms: "error occurred" });
        return;
      }

      if (result.length === 0) {
        // User does not exist
        res.json({ sms: "oops user does not exist" });
        return;
      }

      if (result[0].userName != userName) {
        res.json({ sms: "wrong user name" });
        return;
      }

      const checkPassword = await bcrypt.compare(Password, result[0].PassWord);

      if (!checkPassword) {
        res.json({ sms: "incorrect password" });
        return;
      }
      //       const jwtHashKey =  jwt.sign(userName,process.env.SECRETE_KEY)

      const jsonwebtoken = jwt.sign({ userName }, process.env.SECRETE_KEY, {
        expiresIn: "30d",
      });

      res
        .status(200)
        .cookie("jwtoken", jsonwebtoken, {
          httpOnly: true,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          sameSite: "none",
          secure: true,
        })
        .json({ sms: "login successful" });
    });
  },
};
