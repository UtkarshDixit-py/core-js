const express = require('express');
const port = 8000;

const app = express(); 
const userRoute = require("./routes/users");
const profileRoute = require("./routes/profile");
const errorRoute = require("./routes/error");

app.use('/users',userRoute);
app.use('/profile',profileRoute);
// app.use("*",errorRoute);

app.get('/',function(req,res){
    console.log(req)
    res.send('express is running')
})

// app.get('/users',function(req,res){
//     // console.log()
//     res.send('get req on /users')
// })

// app.get('/profile',function(req,res){
//     res.send('get req on /profile')
// })

// app.get('*',function(req,res){
//     res.send("error 404 page not found")
// })



app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('my express server is running on port',port)
})

