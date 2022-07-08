import styled from 'styled-components';

const MainTemplate = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	* {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
		color: blue;
	}

	ul,
	li {
		list-style: none;
	}

	.search {
		width: 100%;
		height: 5rem;
		border-bottom: 0.1rem #000 solid;
		& > .searchForm {
			width: 50%;
			height: 100%;
			transform: translate(70%, 25%);
			& > .text {
				width: 50%;
				height: 50%;
				font-size: 15px;
			}
			& > a {
				padding: 8px 5px 12px 5px;
				margin-left: 0.3rem;
				border: 0.1rem #000 solid;
			}
		}
	}

	.body {
		width: 100%;
		height: 90%;
		padding-top: 3rem;
	}

	.blockList {
		width: 45%;
		height: 75%;
		float: left;
		text-align: center;
		border: 0.1rem #000 solid;
		border-radius: 1rem;
		margin-left: 3%;
		overflow-y: scroll;
		-ms-overflow-style: none;
		::-webkit-scrollbar {
			display: none;
		}
	}

	.txList {
		width: 45%;
		height: 75%;
		float: right;
		text-align: center;
		border: 0.1rem #000 solid;
		border-radius: 1rem;
		margin-right: 3%;
		overflow-y: scroll;
		-ms-overflow-style: none;
		::-webkit-scrollbar {
			display: none;
		}
	}

	.blockHeader {
		border-bottom: 0.1rem #000 solid;
	}

	.txHeader {
		border-bottom: 0.1rem #000 solid;
	}

	.block,
	.tx {
		width: 95%;
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
			width: 19%;
			height: 100%;
			& > .block_number {
				width: 70%;
				height: 40%;
				margin-left: 5%;
				margin-top: 6%;
			}
			& > .timestamp {
				width: 70%;
				height: 40%;
				margin-left: 5%;
			}
		}
		& > .blockRight {
			width: 80%;
			height: 100%;
		}
		& > .txLeft {
			margin-left: 1%;
			margin-top: 1.5%;
			width: 40%;
			& > .transactionHash {
				width: 95%;
				text-overflow: ellipsis;
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
