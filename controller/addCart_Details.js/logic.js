const { creatCart } = require("./query");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/productImages");
  },
  filename: (req, file, cb) => {
    let uniqueFileName =
      file.originalname + Date.now() + path.extname(file.originalname);
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, uniqueFileName);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

const upload = multer({ storage: storage });

module.exports = {
  creatCartLogic: (req, res) => {
    console.log(req.body);

    upload.single("myfile")(req, res, (err) => {
      if (err) {
        res.status(500).json({ message: err.message });
        // return;
      }
      // console.log(req.file);
      const body = req.body;
      // console.log(body);
      const imagePath = req.file.path;

      console.log(imagePath);
      body.imageLink = imagePath;

      creatCart(body, (error, result) => {
        if (error) {
          console.log(error.message);
          res.status(404).json({ sms: "card not added" });
          return;
        }
        res.status(201).json({ sms: result });
      });
    });
  },
};
