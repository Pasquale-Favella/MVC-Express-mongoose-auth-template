const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        index: true,
        unique: true 
    },
    password : String,  
  
},{ timestamps: true });

module.exports = mongoose.model('Users',userSchema);