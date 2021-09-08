const express = require('express');
const userController = require('../controller/user.controller');

const route = express.Router();

route
    .get('/', (req,res)=>{res.send('user route')})
    .post('/login', userController.signInUsers)
    .post('/signup',userController.signUpUser)

module.exports = route;