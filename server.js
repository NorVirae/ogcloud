const express = require('express')

const server = express()

const port = process.env.PORT||8000

// server.get("/", (req, res)=>{
//     console.log("8000 was accessed")
//     res.send("connection was successful")
// })

console.log("hello")
server.use(express.static(__dirname+"/build"))

server.get("/hello", (req, res)=>{
    res.sendFile(__dirname+"/build/"+"index.html")
})

server.get("*", (req, res)=>{
    res.sendFile(__dirname+"/build/"+"index.html")

})

server.listen(port, (dats)=>{
    console.log("Server connected successfully at port "+port)
})

