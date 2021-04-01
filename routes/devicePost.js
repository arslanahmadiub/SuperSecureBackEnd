const express = require("express");

const router = express.Router();
const Device = require("../models/Device");

router.post("/", async (req, res) => {
  const { name, company, freq, range, detail, des, cat, imageUrl,shortDesc } = req.body;
  try {
    let device = new Device({
      
      deviceName: name,
      company: company,
      frequency: freq,
      range: range,
      detailLink: detail,
      detail: des,
      category: cat,
      shortDesc:shortDesc,
      image:imageUrl
    });
  
      await device.save();
      res.send(device);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
