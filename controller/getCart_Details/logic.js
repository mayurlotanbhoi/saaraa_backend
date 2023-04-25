const { getproductDetails } = require("./query");

module.exports = {
  getproductDetails_Logic: (req, res) => {
    const categoryId = req.params.categoryId;
    getproductDetails(categoryId, (error, result) => {
      if (error) {
        console.log(error);
        res.status(401).json({ sms: "somthing is wrong" });
        return;
      }
      res.status(200).json(result);
    });
  },
};
