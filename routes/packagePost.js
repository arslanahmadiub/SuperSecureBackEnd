const express = require("express");
const router = express.Router();
const Package = require("../models/Package");

router.post("/", async (req, res) => {
  const { packageName, price, bandwidth } = req.body;
  try {
    let package = new Package({
      packageName,
      price,
      bandwidth,
    });
    let package_avail = await Package.findOne({
      packageName: package.packageName,
    });
    if (package_avail)
      await Package.updateMany(
        { packageName: packageName },
        {
          price,
          bandwidth,
        },

        res.send("Success!")
      );
    else {
      await package.save();
      res.send(package);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
