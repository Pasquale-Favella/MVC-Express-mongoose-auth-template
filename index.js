const express = require('express');
require('dotenv').config();

/*FUNCTION TO CONNECT DB*/
const { connectDB } = require('./db');

/*MIDDLEWARES IMPORT*/
const ErrorMiddleware = require('./middlewares/error.middleware');
const AuthMiddleware = require('./middlewares/auth.middleware');

/* ROUTES IMPORT*/
const userRoute = require('./routes/user.route');
const helloWorldRoute = require('./routes/helloworld.route');

const port = process.env.PORT || 4000;

const app = express();

/* GLOBAL MIDDLEWARES */
app.use(express.json());
app.use(AuthMiddleware.checkTokenSetUser);

/* ROUTES */
app.use('/auth',userRoute);

/*PROTECTED DUMMY ROUTE AVAILABLE ONLY VIA
AUTHORIZATION HEADER Bearer token PROVIDED THROUGH LOGIN OR SIGNUP*/
app.use('/hello',AuthMiddleware.isLoggedIn,helloWorldRoute);

/* ERROR RESPONSE HANDLING */
app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.errorHandler);

connectDB()
    .then(()=>{
        console.log('DB CONNECTED')
        app.listen(port,()=> console.log('SERVER STARTED ON PORT : ' + port));
    })
    .catch((err)=> console.log('DB CONNECTION FAIL : ' + err))