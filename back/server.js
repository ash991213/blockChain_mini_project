const express = require('express');
const app = express();
const db = require('./models');
const WebSocket = require('ws');
const cors = require('cors');
const registEventHandler = require('./sub.js');
const dbAddBlock = require('./main');
const { Block, Transaction } = require('./models');
const { Op } = require('sequelize');

let wss;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize
	.sync()
	.then(() => {
		console.log('DataBase Connection');
	})
	.catch(console.error);

app.use(
	cors({
		origin: '*',
		credentials: true,
	}),
);

app.post('/block', async (req, res) => {
	const block = await Block.findAll({
		order: [['id', 'DESC']],
	});

	res.json(block);
});

app.post('/transaction', async (req, res) => {
	const tx = await Transaction.findAll({
		order: [['id', 'DESC']],
	});

	res.json(tx);
});

app.post('/search', async (req, res) => {
	const { data } = req.body;

	let response;

	const block = await Block.findOne({
		where: {
			[Op.or]: [{ hash: data }, { number: data }],
		},
		order: [['id', 'DESC']],
	});

	if (block !== null) {
		if (block.hash === data || block.number === Number(data)) {
			response = block;
		}
	}

	if (response === undefined) {
		response = await Transaction.findAll({
			where: {
				[Op.or]: [{ to: data }, { from: data }],
			},
		});
	}

	res.json(response);
});

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
		dbAddBlock();
	}),
);
