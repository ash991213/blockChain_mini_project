import { useState, useEffect } from 'react';
import axios from 'axios';
import ListTemplate from '../components/common/Block';
import { Link } from 'react-router-dom';

const Transaction = () => {
	const [tx, setTx] = useState([]);

	const txList = (_tx) => {
		const txs = _tx.map((v, k) => {
			return (
				<>
					<div className='list_div'>
						<ul key={k} className='list_ul'>
							<li>
								<Link to='/Search' state={{ data: v.blockHash }}>
									BlockHash : {v.blockHash}
								</Link>
							</li>
							<li>
								<Link to='/Search' state={{ data: v.blockNumber }}>
									BlockNumber : {v.blockNumber}
								</Link>
							</li>
							<li>CumulativeGasUsed : {v.cumulativeGasUsed}</li>
							<li>EffectiveGasPrice : {v.effectiveGasPrice}</li>
							<li>
								<Link to='/Search' state={{ data: v.from }}>
									From : {v.from}
								</Link>
							</li>
							<li>GasUsed : {v.gasUsed}</li>
							<li>
								<Link to='/Search' state={{ data: v.to }}>
									To : {v.to}
								</Link>
							</li>
							<li>TransactionHash : {v.transactionHash}</li>
							<li>TransactionIndex : {v.transactionIndex}</li>
							<li>Type : {v.type}</li>
						</ul>
					</div>
				</>
			);
		});
		return txs;
	};

	const getTx = async () => {
		const result = await axios.post('http://localhost:4000/transaction', null);
		const { data } = result;

		setTx(data);
	};

	useEffect(() => {
		getTx();
	}, []);

	return (
		<ListTemplate>
			<div className='title'>All Transaction</div>
			<div>{tx !== [] ? txList(tx) : null}</div>
		</ListTemplate>
	);
};

export default Transaction;
