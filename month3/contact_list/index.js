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
app.use(express.urlencoded())

var myList = [
    {
        name:"utkarsh",
        contact:"85858585"

    },
    {
        name:"deep work",
        contact:"85858585"

    },
    {
        name:"tony stark",
        contact:"851118585"

    },
    {
        name:"bruce wayne",
        contact:"85858585"

    },
    {
        name:"johny depp",
        contact:"92858585"

    },

]

app.get('/',function(req,res){
    console.log(req)
    // res.send('express is running')
   return res.render('home',{
        title : "Contact List",
        contact_list : myList
    })
})

app.get('/practice', function(req,res){
   return res.render('practice',{
        title: "playground"
    })
})

app.post('/create-contact',function(req,res){
    console.log("createContact req.",req.body)
    myList.push(req.body)
   return res.redirect('back')
})




app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('my express server is running on port',port)
})

