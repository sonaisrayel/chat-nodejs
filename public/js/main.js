const chatForm = document.getElementById('chat-form');

const socket = io();


socket.on('message', message => {
    outputMessage(message);


});

//Message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get message text
    const msg = e.target.elements.msg.value;
    //emmiting message to the server
    socket.emit('chatMessage', msg);

});

function outputMessage(msg) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = ` <p class="meta">Mary <span>9:15pm</span></p>
    <p class="text">
      ${msg}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}