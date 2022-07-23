import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Portfolio from './components/main/portfolio/Portfolio';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="main">
				<Header />
				<Portfolio />
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
