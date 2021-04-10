const express = require("express");
const app = express();
const cors = require("cors");


//middlewares

app.use(express.json());    //req body
app.use(cors());            //backend frontend


//routes

app.use('/auth', require('./src/routes/jwtAuth'));

//dashboard
app.use('/dashboard', require('./src/routes/dashboard'));


//listening port

app.listen(3001, () => {
    console.log('App listening on 3001')
});