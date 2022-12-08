const http = require("http");

const server = http.createServer((request,response,next  )=>{
    response.end("working")
})

server.listen(4000,"localhost",()=>{
    console.log("Server is working on https://localhost:4000");

})