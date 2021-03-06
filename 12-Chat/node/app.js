const express = require('express');
const redis = require('socket.io-redis');

const app = express();
const port = 3000;


app.get('/', (_, res) => {
	res.sendFile(__dirname + '/index.html');
});

const server = app.listen(port, () => {
	console.log('Express listening on port', port);
});

const listen = require('socket.io');
const io = listen(server);
io.adapter(redis({ host: 'redis', port: 6379 }));

const color = [
	"yellow",
	"green",
	"pink",
	"orange",
	"black",
	"white"
]

io.on('connection', (socket) => {
	// console.log("연결")
	const username = color[ Math.floor(Math.random() * 6) ];
	
	socket.broadcast.emit("join", { username });

	socket.on('client message', (data) => {
		// console.log(data);
		io.emit('server message', {
			username,
			message: data.message
		});
	});

	socket.on("disconnect", ()=> {
		socket.broadcast.emit("leave", { username });
	});
});