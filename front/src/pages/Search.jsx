import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ListTemplate from '../components/common/Block';

const Block = () => {
	const [searchList, setSearchList] = useState([]);

	const location = useLocation();
	const data = location.state.data;

	const Search = async () => {
		const response = await axios.post('http://localhost:4000/search', { data: data });

		setSearchList(response.data);
	};

	useEffect(() => {
		Search();
	}, []);

	const showList = () => {
		let list;
		if (searchList.length === undefined) {
			const { difficulty, extraData, gasLimit, gasUsed, hash, miner, mixHash, nonce, number, parentHash, receiptsRoot, sha3Uncles, size, stateRoot, timestamp, transactionsRoot } = searchList;
			list = (
				<div className='list_div'>
					<ul className='list_ul'>
						<li>Difficulty : {difficulty}</li>
						<li>ExtraData : {extraData}</li>
						<li>GasLimit : {gasLimit}</li>
						<li>GasUsed : {gasUsed}</li>
						<li>Hash : {hash}</li>
						<li>Miner : {miner}</li>
						<li>MixHash : {mixHash}</li>
						<li>Nonce : {nonce}</li>
						<li>Number : {number}</li>
						<li>ParentHash : {parentHash}</li>
						<li>ReceiptsRoot : {receiptsRoot}</li>
						<li>Sha3Uncles : {sha3Uncles}</li>
						<li>Size : {size}</li>
						<li>StateRoot : {stateRoot}</li>
						<li>Timestamp : {timestamp}</li>
						<li>TransactionsRoot : {transactionsRoot}</li>
					</ul>
				</div>
			);
		} else {
			list = searchList.map((v, k) => {
				return (
					<div className='list_div'>
						<ul key={k} className='list_ul'>
							<li>BlockHash : {v.blockHash}</li>
							<li>BlockNumber : {v.blockNumber}</li>
							<li>CumulativeGasUsed : {v.cumulativeGasUsed}</li>
							<li>EffectiveGasPrice : {v.effectiveGasPrice}</li>
							<li>From : {v.from}</li>
							<li>GasUsed : {v.gasUsed}</li>
							<li>To : {v.to}</li>
							<li>TransactionHash : {v.transactionHash}</li>
							<li>TransactionIndex : {v.transactionIndex}</li>
							<li>Type : {v.type}</li>
						</ul>
					</div>
				);
			});
		}

		return list;
	};

	return (
		<ListTemplate>
			<div className='title'>
				{searchList.length === 0 ? 'No Research' : 'Find Research'} {}
			</div>
			<div>{searchList !== [] ? showList() : null}</div>
		</ListTemplate>
	);
};

export default Block;
