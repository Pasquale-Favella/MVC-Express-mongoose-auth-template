const mongoose = require('mongoose');

const{ MONGO_URI } = process.env;

async function connectDB(){
   return await mongoose.connect(MONGO_URI,{ useNewUrlParser: true ,useUnifiedTopology: true, useCreateIndex: true ,useFindAndModify: false});
}

module.exports = {connectDB}
