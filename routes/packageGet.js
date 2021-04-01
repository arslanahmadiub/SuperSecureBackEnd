const express = require("express");
const router = express.Router();
const Package = require("../models/Package")

router.get("/", async (req, res) => {

  try {
    const result = await Package.find();
    if(result)
     res.send(result)
    else{
        res.send("No data found!")
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});
module.exports = router;
