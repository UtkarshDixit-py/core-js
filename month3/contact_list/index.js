const express = require('express');
const port = 8000;

const app = express();


app.get('/',function(req,res){
    res.send('express is running')
})


app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('my express server is running on port',port)
})