const express = require('express');
require('dotenv').config();

/*FUNCTION TO CONNECT DB*/
const { connectDB } = require('./db');

/*MIDDLEWARES*/
const ErrorMiddleware = require('./middlewares/error.middleware');
const AuthMiddleware = require('./middlewares/auth.middleware');

/* ROUTES */
const userRoute = require('./routes/user.route');
const helloWorldRoute = require('./routes/helloworld.route');

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(AuthMiddleware.checkTokenSetUser);

app.use('/auth',userRoute);
app.use('/hello',AuthMiddleware.isLoggedIn,helloWorldRoute);

app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.errorHandler);

connectDB()
    .then(()=>{
        console.log('DB CONNECTED')
        app.listen(port,()=> console.log('SERVER STARTED ON PORT : ' + port));
    })
    .catch((err)=> console.log('DB CONNECTION FAIL : ' + err))