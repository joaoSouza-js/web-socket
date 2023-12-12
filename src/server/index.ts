import  express from "express";
import socketio from "socket.io";
import http from "http";
import path from "path";
const app = express();
const port =  3333

app.use(express.static(path.resolve(__dirname, "../public")))

const httpsServer = http.createServer(app)
const socketServer = new socketio.Server(httpsServer)

socketServer.on("connection", socket => {
    console.log(socket.id)
    socket.on("message", data => {
        console.log("new data: " + JSON.stringify(data))

        socket.emit("received", `messsage received: ${JSON.stringify(data)}`)
    })
})





httpsServer.listen(port, () => {
    console.log("listening on port => 3333")


})