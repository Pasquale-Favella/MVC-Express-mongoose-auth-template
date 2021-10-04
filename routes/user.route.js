const express = require('express');
const userController = require('../controller/user.controller');
const ValidationMiddleware = require('../middlewares/validation.middleware');

const route = express.Router();

route
    .get('/', (req,res)=>{res.send('user route')})
    .post('/login', ValidationMiddleware.validateAuthBody , userController.signInUsers)
    .post('/signup', ValidationMiddleware.validateAuthBody ,userController.signUpUser)

module.exports = route;