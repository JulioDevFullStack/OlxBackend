const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    
        name: {
          type: String
        },
        slug: {
          type: String
        },
    },
      { timestamps: true },
    )

module.exports  = mongoose.model('Categpry', categorySchema);