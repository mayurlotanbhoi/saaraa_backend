const pool = require("../DB_Connections/mySql_Connection");

module.exports = {
  creteUser: (useLoginData, calback) => {
    //     console.log(useLoginData);
    pool.query(
      " insert into useDetails(userName, Password) values(?,?);",
      [useLoginData.userName, useLoginData.PassWord],

      (error, result, field) => {
        if (error) return calback(error);

        return calback(null, result);
      }
    );
  },

  checkUserExist: (userName, callback) => {
    pool.query(
      "SELECT * FROM useDetails WHERE userName = ?",
      [userName],

      (error, results, fields) => {
        if (error) return callback(error);

        // if (results.length === 0) {
        //   // user does not exist
        //   return callback();
        // } else {
        // user exists
        return callback(null, results);
        // }
      }
    );
  },
};
