import { useEffect, useState } from 'react';

const ws = new WebSocket('ws://localhost:4000');

const Index = () => {
	const [block, setBlock] = useState([]);
	const [tx, setTx] = useState([]);

	const whatTime = (_time) => {
		let time;
		let timestamp = Math.floor(new Date().getTime() / 1000 - _time);

		if (timestamp >= 3600) time = Math.floor(timestamp / 3600) + '시간전';
		else if (timestamp >= 60) time = Math.floor(timestamp / 60) + '분전';
		else time = timestamp + '초전';

		return time;
	};

	const blockList = (_block) => {
		const blocks = _block.map((v, k) => {
			return (
				<div className='block'>
					<div className='Bk'>
						<span>Block</span>
					</div>
					<div className='blockLeft'>
						<div className='block_number'>Number:{v.number}</div>
						<div className='timestamp'>Time : {whatTime(v.timestamp)} </div>
					</div>
					<div className='blockRight'>
						<div className='difficulty'>Difficulty : {v.difficulty}</div>
						<div className='miner'>Miner : {v.miner}</div>
						<div className='nonce'>Nonce : {v.nonce}</div>
					</div>
				</div>
			);
		});
		return blocks;
	};

	const txList = (_tx) => {
		const txs = _tx.map((v, k) => {
			return (
				<div className='tx'>
					<div className='Tx'>
						<span>Tx</span>
					</div>
					<div className='txLeft'>
						<div className='transactionHash'>TxHash:{v.transactionHash}</div>
						<div className='blockNumber'>BlockNumber : {v.blockNumber} </div>
					</div>
					<div className='trRight'>
						<div className='from'>From : {v.from}</div>
						<div className='to'>To : {v.to}</div>
					</div>
				</div>
			);
		});
		return txs;
	};

	useEffect(() => {
		ws.onopen = () => {
			console.log('Front 웹소켓 연결');
		};

		ws.onmessage = (response) => {
			console.log('hello');
			const { block, tx } = JSON.parse(response.data);

			setBlock(block);
			setTx(tx);
		};
	}, [block]);

	return (
		<div className='body'>
			<div className='blockList'>
				<h1 className='blockHeader'>Latest Blocks</h1>
				<div>{block !== [] ? blockList(block) : null}</div>
			</div>
			<div className='txList'>
				<h1 className='txHeader'>Latest Transactions</h1>
				<div>{tx !== [] ? txList(tx) : null}</div>
			</div>
		</div>
	);
};

export default Index;
