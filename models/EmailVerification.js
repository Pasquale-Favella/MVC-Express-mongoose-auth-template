const mongoose = require('mongoose');

const { Schema } = mongoose;

const mailVerification = new Schema({
    user_id: {
        type: String,
        index: true,
        unique: true 
    },
    slug : String
  
});

mailVerification.pre('save', function(next) {
    this.slug = this._id+this.user_id;
    next();
});

module.exports = mongoose.model('MailVerification',mailVerification);