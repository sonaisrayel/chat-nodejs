
const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const socketIO = require('socket.io');
const server = http.createServer(app);

const io = socketIO(server);
const PORT = 3000 | process.env.PORT;

//static folder
app.use(express.static(path.join(__dirname, 'public')));


// Run when clinet conneects

io.on('connection', socket => {
  //Welcome current user
  socket.emit('message', 'Welcome to new Chat');

  //Bridcast when use connects
  socket.broadcast.emit('message', 'A new user has joined the chat');


  //Runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'user has left the chat');
  });

  //Listen for chat message
  socket.on('chatMessage', (msg) => {
    socket.emit('message', msg);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});