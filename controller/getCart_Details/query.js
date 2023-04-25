const pool = require("../DB_Connections/mySql_Connection");

module.exports = {
  getproductDetails: (data, callback) => {
    pool.query(
      "SELECT * FROM saree WHERE Category = ?",
      [data],
      (error, result, field) => {
        if (error) return callback(error);

        // console.log(result);

        return callback(null, result);
      }
    );
  },
};
