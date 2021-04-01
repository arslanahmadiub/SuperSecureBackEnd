const express = require("express");
const router = express.Router();
const Package = require("../models/Package");

router.post("/", async (req, res) => {
  const { packageId} = req.body;
  try {
    Package.deleteOne({ _id: packageId }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
        res.send("success")
      });
    }
   catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
