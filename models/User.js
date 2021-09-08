const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        index: true,
        unique: true 
    },
    password : String,
    createdAt : { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users',userSchema);