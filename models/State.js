const mongoose = require('mongoose');


const stateSchema = new mongoose.Schema(
    {
      name: {
        type: String
      },
    },
    { timestamps: true },
  )
  module.exports= mongoose.model('State', stateSchema);
