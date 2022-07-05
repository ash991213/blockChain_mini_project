import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTemplate = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 2%;
	border-bottom: 0.1rem #000 solid;

	* {
		margin: 0;
		padding: 0;
	}

	ul,
	li {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: blue;
	}

	.header {
		margin-left: 3%;
		& > .logo {
			font-size: 2rem;
		}
	}

	.menu {
		width: 40%;
		display: flex;
		margin-left: auto;
		align-items: center;
		justify-content: space-between;
		& > li {
			margin-right: 20%;
			& > a {
				font-size: 1.5rem;
			}
		}
	}
`;

const Header = () => {
	return (
		<HeaderTemplate>
			<div className='header'>
				<h2 className='logo'>Swan's Chain</h2>
			</div>
			<ul className='menu'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='Block'>Block</Link>
				</li>
				<li>
					<Link to='Transaction'>Transaction</Link>
				</li>
			</ul>
		</HeaderTemplate>
	);
};

export default Header;
