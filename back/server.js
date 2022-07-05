const express = require('express');
const app = express();
const db = require('./models');
const WebSocket = require('ws');
const registEventHandler = require('./sub.js');

let wss;

db.sequelize
	.sync()
	.then(() => {
		console.log('DataBase Connection');
	})
	.catch(console.error);

const webSocket = (server) => {
	wss = new WebSocket.Server({ server });

	let sockets = [];

	wss.on('connection', (ws, req) => {
		if (sockets.length === 0) {
			sockets.push(ws);
		}
		console.log('Back 웹소켓 연결');

		registEventHandler(ws);
	});
};

webSocket(
	app.listen(4000, () => {
		console.log('Back Server On');
	}),
);
