const { Block, Transaction } = require('./models');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:9000'));

let DbBlockNum;
let networkBlockNum;
let block;
let tx;

module.exports = dbAddBlock = async () => {
	DbBlockNum = await Block.findOne({
		attributes: ['number'],
		order: [['number', 'DESC']],
	});

	networkBlockNum = await web3.eth.getBlockNumber();

	console.log(DbBlockNum.number, networkBlockNum);

	for (let i = DbBlockNum.number; i <= networkBlockNum; i++) {
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

		if (block.transactions.length > 0) {
			block.transactions.forEach(async (v, k) => {
				tx = await web3.eth.getTransactionReceipt(v.hash);

				let { blockHash, blockNumber, contractAddress, cumulativeGasUsed, effectiveGasPrice, from, gasUsed, status, to, transactionHash, transactionIndex, type } = tx;

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

	web3.eth.subscribe('newBlockHeaders', async (error, data) => {
		if (!error) {
			console.log('블록체인 네트워크 연결');

			block = await web3.eth.getBlock(data.number, true);

			let { parentHash, sha3Uncles, miner, stateRoot, transactionsRoot, receiptsRoot, difficulty, number, gasLimit, gasUsed, timestamp, extraData, mixHash, nonce, baseFeePerGas, hash, size } = data;

			await Block.create({
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
			});

			if (block.transactions.length > 0) {
				block.transactions.forEach(async (v, k) => {
					tx = await web3.eth.getTransactionReceipt(v.hash);

					let { blockHash, blockNumber, contractAddress, cumulativeGasUsed, effectiveGasPrice, from, gasUsed, status, to, transactionHash, transactionIndex, type } = tx;

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
};
