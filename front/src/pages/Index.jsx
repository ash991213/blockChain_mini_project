import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
	const [block, setBlock] = useState([]);
	const [tx, setTx] = useState([]);

	const whatTime = (_time) => {
		let time;
		let timestamp = Math.floor(new Date().getTime() / 1000 - _time);

		if (timestamp >= 3600) time = Math.floor(timestamp / 3600) + '시간전';
		else if (timestamp >= 60) time = Math.floor(timestamp / 60) + '분전';
		else time = timestamp + 3 + '초전';

		return time;
	};

	const blockList = (_block) => {
		const blocks = _block.map((v, k) => {
			return (
				<div className='block' key={k}>
					<div className='Bk'>
						<span>Block</span>
					</div>
					<div className='blockLeft'>
						<div className='block_number'>
							<Link to='/Search' state={{ data: v.number }}>
								Number:{v.number}
							</Link>
						</div>
						<div className='timestamp'>Time : {whatTime(v.timestamp)} </div>
					</div>
					<div className='blockRight'>
						<div className='hash'>
							<Link to='/Search' state={{ data: v.hash }}>
								Hash : {v.hash}
							</Link>
						</div>
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
				<div className='tx' key={k}>
					<div className='Tx'>
						<span>Tx</span>
					</div>
					<div className='txLeft'>
						<div className='transactionHash'>TxHash:{v.transactionHash}</div>
						<div className='blockNumber'>BlockNumber : {v.blockNumber} </div>
					</div>
					<div className='trRight'>
						<div className='from'>
							<Link to='/Search' state={{ data: v.from }}>
								From : {v.from}
							</Link>
						</div>
						<div className='to'>
							<Link to='/Search' state={{ data: v.to }}>
								To : {v.to}
							</Link>
						</div>
					</div>
				</div>
			);
		});
		return txs;
	};

	const [data, setData] = useState('');

	const onChange = (e) => {
		setData(e.target.value);
	};

	useEffect(() => {
		const ws = new WebSocket('ws://localhost:4000');

		ws.onopen = () => {
			console.log('Front 웹소켓 연결');
			ws.send(JSON.stringify('블록 정보 요청'));
			ws.onmessage = (response) => {
				const { block, tx } = JSON.parse(response.data);

				setBlock(block);
				setTx(tx);
			};
		};

		return () => {
			ws.close();
		};
	}, []);

	return (
		<>
			<div className='search'>
				<form className='searchForm'>
					<input className='text' onChange={onChange} type='text' placeholder='Search By Address / Block Hash / Block Number' />
					<Link to='/Search' state={{ data: data }}>
						Search
					</Link>
				</form>
			</div>
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
		</>
	);
};

export default Index;
