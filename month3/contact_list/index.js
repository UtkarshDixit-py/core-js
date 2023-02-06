const express = require('express');
const path  = require('path');
const db = require('./config/mongoose')
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
app.use(express.static('assets'))

//middleware 1
app.use(function(req,res,next){
    req.myName = "Utkarsh";
    next();
})

//middleware 2
app.use(function(req,res,next){
    console.log("from controller 2", req.myName);
    next()
})



var myList = [
    {
        name:"utkarsh",
        contact:"858585851"

    },
    {
        name:"deep work",
        contact:"858585852"

    },
    {
        name:"tony stark",
        contact:"8511185853"

    },
    {
        name:"bruce wayne",
        contact:"858585854"

    },
    {
        name:"johny depp",
        contact:"928585856"

    },

]

app.get('/',function(req,res){
    console.log("from get / ",req.myName)
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

app.get('/delete-contact/',function(req,res){
    // /delete-contact/:phone
    // console.log(req.params);

    console.log(req.query);

   let updatedList =  myList.filter((item)=>item.contact!=req.query.phone);
   myList = updatedList;

   console.log(updatedList)
   return res.redirect('back')
})



app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('my express server is running on port',port)
})

