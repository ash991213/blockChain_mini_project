const { Block, Transaction } = require('./models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:9000'));

let block;
let tx;
let response;

module.exports = registEventHandler = async (ws) => {
	ws.onmessage = async () => {
		block = await Block.findAll({
			limit: 20,
			order: [['number', 'DESC']],
		});
		tx = await Transaction.findAll({
			limit: 20,
			order: [['id', 'DESC']],
		});

		response = { block, tx };

		console.log('기존 블록 전송');

		ws.send(JSON.stringify(response));
	};

	web3.eth.subscribe('newBlockHeaders', async (error, data) => {
		if (!error) {
			block = await Block.findAll({
				limit: 20,
				order: [['number', 'DESC']],
			});
			tx = await Transaction.findAll({
				limit: 20,
				order: [['id', 'DESC']],
			});

			response = { block, tx };

			console.log('신규 블록 전송');

			ws.send(JSON.stringify(response));
		}
	});
};
