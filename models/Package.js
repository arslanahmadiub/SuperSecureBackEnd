const mongoose = require("mongoose");
const packageSchema = new mongoose.Schema({
 
  packageName: {
    type: String,
    
  },
  price: {
    type: String,
    
  },
  bandwidth: {
    type: String,
    
  },

  
});
module.exports = package = mongoose.model("package", packageSchema, "Package");
