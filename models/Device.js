const mongoose = require("mongoose");
const deviceSchema = new mongoose.Schema({
  
  deviceName: {
    type: String,
    
  },
  company: {
    type: String,
    
  },
  frequency: {
    type: String,
    
  },
  range: {
    type: String,
  },
  detailLink: {
    type: String,
    
  },
  detail: {
    type: String,
    
  },
  category: {
    type: String,

  },
  shortDesc: {
    type: String,

  },
  image: {
    type: String,

  }
});
module.exports = Device = mongoose.model("device", deviceSchema, "Device");
