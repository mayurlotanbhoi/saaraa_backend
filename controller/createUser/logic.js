const { creteUser, checkUserExist } = require("./query");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (req, res) => {
    const { userName, Password } = req.body;

    checkUserExist(userName, async (error, result) => {
      if (error) {
        res.json({ sms: "something went wrong" });
        return;
      }

      if (result.length > 0) {
        // User already exists
        res.json({ sms: "user already exists" });
        return;
      }

      // User does not exist, create new user
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(Password, salt);

      const userObj = {
        userName: userName,
        PassWord: hash,
      };

      creteUser(userObj, (error, result) => {
        if (error) {
          res.json({ sms: "something went wrong" });
          return;
        }
        res.json({ sms: "Regisation successful" });
      });
    });
  },
};
