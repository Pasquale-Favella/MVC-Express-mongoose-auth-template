const express = require('express');
require('dotenv').config();
require('./db');
const userRoute = require('./routes/user.route');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.use('/users',userRoute);



app.listen(PORT,()=>{
    console.log('SERVER STARTED ON PORT : '+PORT)
})