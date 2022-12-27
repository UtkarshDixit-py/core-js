const http = require("http");
const port = 8000;
const fs = require('fs')


function requestHandler(req,res){s
    console.log(req.url);

    res.writeHead(200,{'content-type' : 'text/html'})

    let filePath;

    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break;
        default :
            filePath = './404.html'
    }

    fs.readFile(filePath,function(err,data){
        if(err){
            console.log("err",err);
            return res.end('ERROR')
        }

        return res.end(data)
    })

    // fs.readFile('./index.html',function(err,data){

    //     if(err){
    //         console.log("err",err);
    //         return res.end('ERROR')
    //     }

    //     return res.end(data)

    // })

    // res.end('<h1>Gotit</h1>')
}

const server = http.createServer(requestHandler)

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running at port (installed nodemon) :" , port)
})




const EventEmitter = require("events");

const event = new EventEmitter();

//what more listners like on and once

// event.once('print',()=>{
//     console.log("first callback")
// }) 


// event.on('print',()=>{
//     console.log("firstCallback")
// })

// event.on("print",()=>{
//     console.log("second callback")
// })

// event.on("print",()=>{
//     console.log("third callback")
// })

event.emit("print"); //
event.emit("print")



