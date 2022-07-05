const { Block, Transaction } = require('./models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:9000'));

let block;
let tx;

module.exports = registEventHandler = async (ws) => {
	web3.eth.subscribe('newBlockHeaders', async (error, data) => {
		console.log(await web3.eth.getBlock(data.hash));
		if (!error) {
			const blockNum = await Block.findOne({
				attributes: ['number'],
				order: [['number', 'DESC']],
			});

			for (let i = blockNum ? blockNum.number : 0; i <= data.number; i++) {
				block = await web3.eth.getBlock(i, true);
				let { parentHash, sha3Uncles, miner, stateRoot, transactionsRoot, receiptsRoot, difficulty, number, gasLimit, gasUsed, timestamp, extraData, mixHash, nonce, baseFeePerGas, hash, size } = block;

				await Block.findOrCreate({
					where: { number: i },
					defaults: {
						parentHash,
						sha3Uncles,
						miner,
						stateRoot,
						transactionsRoot,
						receiptsRoot,
						difficulty,
						number,
						gasLimit,
						gasUsed,
						timestamp,
						extraData,
						mixHash,
						nonce,
						baseFeePerGas,
						hash,
						size,
					},
				});

				block.transactions.forEach(async (v) => {
					tx = await web3.eth.getTransactionReceipt(v.hash);
					const { blockHash, blockNumber, contractAddress, cumulativeGasUsed, effectiveGasPrice, from, gasUsed, status, to, transactionHash, transactionIndex, type } = tx;

					await Transaction.create({
						blockHash,
						blockNumber,
						contractAddress,
						cumulativeGasUsed,
						effectiveGasPrice,
						from,
						gasUsed,
						status,
						to,
						transactionHash,
						transactionIndex,
						type,
					});
				});
			}
		}
	});
	block = await Block.findAll({
		limit: 20,
		order: [['number', 'DESC']],
	});
	tx = await Transaction.findAll({
		limit: 20,
		order: [['id', 'DESC']],
	});

	let response = { block, tx };

	ws.send(JSON.stringify(response));

	return;
};
