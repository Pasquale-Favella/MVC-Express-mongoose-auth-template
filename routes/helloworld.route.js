const express = require('express');

const route = express.Router();

route
    .get('/', (req,res)=>{res.json({...req.user,msg:'Hello world!'})})
   

module.exports = route;