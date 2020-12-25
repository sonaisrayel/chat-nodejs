
const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const socketio = require('socket.io')
const server = http.createServer(app);

const io = socketio(server);
const PORT = 3000 | process.env.PORT;

//static folder
app.use(express.static(path.join(__dirname, 'public')));


// Run when clinet conneects

io.on('connection', socket => {
    console.log('new socket coonnection')
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});