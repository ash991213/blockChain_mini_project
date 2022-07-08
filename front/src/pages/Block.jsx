import { useState, useEffect } from 'react';
import axios from 'axios';
import ListTemplate from '../components/common/Block';
import { Link } from 'react-router-dom';

const Block = () => {
	const [block, setBlock] = useState([]);

	const blockList = (_block) => {
		const blocks = _block.map((v, k) => {
			return (
				<>
					<div className='list_div'>
						<ul key={k} className='list_ul'>
							<li>Difficulty : {v.difficulty}</li>
							<li>ExtraData : {v.extraData}</li>
							<li>GasLimit : {v.gasLimit}</li>
							<li>GasUsed : {v.gasUsed}</li>
							<li>Hash : {v.hash}</li>
							<li>
								<Link to='/Search' state={{ data: v.miner }}>
									Miner : {v.miner}
								</Link>
							</li>
							<li>MixHash : {v.mixHash}</li>
							<li>Nonce : {v.nonce}</li>
							<li>Number : {v.number}</li>
							<li>ParentHash : {v.parentHash}</li>
							<li>ReceiptsRoot : {v.receiptsRoot}</li>
							<li>Sha3Uncles : {v.sha3Uncles}</li>
							<li>Size : {v.size}</li>
							<li>StateRoot : {v.stateRoot}</li>
							<li>Timestamp : {v.timestamp}</li>
							<li>TransactionsRoot : {v.transactionsRoot}</li>
						</ul>
					</div>
				</>
			);
		});
		return blocks;
	};

	const getBlock = async () => {
		const result = await axios.post('http://localhost:4000/block', null);
		const { data } = result;

		setBlock(data);
	};

	useEffect(() => {
		getBlock();
	}, []);

	return (
		<ListTemplate>
			<div className='title'>All Block</div>
			{block !== [] ? blockList(block) : null}
		</ListTemplate>
	);
};

export default Block;
