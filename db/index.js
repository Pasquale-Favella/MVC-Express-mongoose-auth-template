const mongoose = require('mongoose');

const{ MONGO_URI } = process.env;

module.exports = mongoose.connect(MONGO_URI,{ useNewUrlParser: true ,useUnifiedTopology: true},()=>{
    console.log('DB CONNECTED')
});
