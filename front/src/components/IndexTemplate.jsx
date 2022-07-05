import styled from 'styled-components';

const MainTemplate = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	* {
		margin: 0;
		padding: 0;
	}

	ul,
	li {
		list-style: none;
	}

	.body {
		width: 100%;
		height: 90%;
	}

	.blockList {
		width: 45%;
		height: 50%;
		float: left;
		text-align: center;
		border: 0.1rem #000 solid;
		border-radius: 1rem;
		margin-left: 3%;
		overflow: scroll;
	}

	.txList {
		width: 45%;
		height: 50%;
		float: right;
		text-align: center;
		border: 0.1rem #000 solid;
		border-radius: 1rem;
		margin-right: 3%;
		overflow: scroll;
	}

	.blockHeader {
		border-bottom: 0.1rem #000 solid;
	}

	.txHeader {
		border-bottom: 0.1rem #000 solid;
	}

	.block,
	.tx {
		width: 80%;
		height: 4rem;
		font-weight: bold;
		border: 0.1rem #000 solid;
		margin: 0 auto;
		margin-top: 1.5rem;
		border-radius: 1rem;
		font-size: 0.9rem;
		text-align: left;
		padding-left: 0.4rem;
		display: flex;
		& > .Bk,
		.Tx {
			width: 8%;
			height: 80%;
			margin-top: 0.7%;
			text-align: center;
			border: 0.1rem #000 solid;
			border-radius: 0.7rem;
			display: inline-block;
			& > span {
				position: relative;
				top: 27.5%;
			}
		}
		& > .Tx {
			border-radius: 2rem;
		}
		& > .blockLeft,
		.txLeft {
			width: 30%;
			height: 100%;
			& > .block_number {
				width: 70%;
				height: 40%;
				margin-left: 5%;
				margin-top: 3%;
			}
			& > .timestamp {
				width: 70%;
				height: 40%;
				margin-left: 5%;
			}
		}
		& > .blockRight {
			width: 60%;
			height: 100%;
		}
		& > .txLeft {
			margin-left: 2%;
			margin-top: 1.5%;
			& > .transactionHash {
				width: 70%;
				overflow: hidden;
			}
		}
		& > .trRight {
			width: 60%;
			height: 100%;
			margin-top: 1.5%;
		}
	}
`;

const Main = ({ children }) => {
	return <MainTemplate>{children}</MainTemplate>;
};

export default Main;
