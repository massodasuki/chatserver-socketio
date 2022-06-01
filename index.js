const app = require('express')()
const http = require('http').createServer(app)


app.get('/', (req, res) => {
    res.send("Node Server is running. Yay!!")
})

//Socket Logic
const socketio = require('socket.io')(http)

socketio.on("connection", (userSocket) => {
    console.log("receive connection");
    userSocket.on("send_message", (data) => {
        console.log(data);
        userSocket.broadcast.emit("receive_message", data)
    })
})

http.listen(3000)