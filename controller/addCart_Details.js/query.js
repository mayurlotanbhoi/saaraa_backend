const pool = require("../DB_Connections/mySql_Connection");

module.exports = {
  creatCart: (postedData, callback) => {
    console.log(postedData);
    pool.query(
      "INSERT INTO saree (ProductName, Price, Color, Size, imageLink, Category, discount, DeliverCondition, brand, ShortDescription, FulleDscription) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        postedData.ProductName,
        postedData.Price,
        postedData.Color,
        postedData.Size,
        postedData.imageLink,
        postedData.Category,
        postedData.discount,
        postedData.DeliverCondition,
        postedData.brand,
        postedData.ShortDescription,
        postedData.FulleDscription,
      ],
      (error, result, field) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
};
