const express = require('express');
const path  = require('path');
const port = 8000;

const app = express(); 
const userRoute = require("./routes/users");
const profileRoute = require("./routes/profile");
const errorRoute = require("./routes/error");

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'))

app.use('/users',userRoute);
app.use('/profile',profileRoute);
// app.use("*",errorRoute);

app.get('/',function(req,res){
    console.log(req)
    res.send('express is running')
})




app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('my express server is running on port',port)
})

