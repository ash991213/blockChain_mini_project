import styled from 'styled-components';

const BlockTemplate = styled.div`
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

	.title {
		width: 100%;
		height: 4.5rem;
		border-bottom: 0.1rem #000 solid;
		text-align: center;
		font-weight: bold;
		font-size: 2.5rem;
		padding-top: 0.7%;
	}

	.list_div {
		width: 60%;
		margin: 0 auto;
		margin-top: 3%;
		padding-top: 1%;
		padding-bottom: 1%;
		padding-left: 1%;
		border: 0.1rem #000 solid;
		border-radius: 2rem;
		font-weight: bold;
	}
`;

const Block = ({ children }) => {
	return <BlockTemplate>{children}</BlockTemplate>;
};

export default Block;
