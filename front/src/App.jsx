import IndexTemplate from './components/IndexTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Block from './pages/Block';
import Header from './components/common/Header';
import Index from './pages/Index';
import Transaction from './pages/Transaction';
import Search from './pages/Search';

const App = () => {
	return (
		<Router>
			<IndexTemplate>
				<Header />
				<Routes>
					<Route path='/' index element={<Index />}></Route>
					<Route path='/Block' element={<Block />}></Route>
					<Route path='/Transaction' element={<Transaction />}></Route>
					<Route path='/Search' element={<Search />}></Route>
				</Routes>
			</IndexTemplate>
		</Router>
	);
};

export default App;
