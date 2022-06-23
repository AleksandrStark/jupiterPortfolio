import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Portfolio from './components/main/portfolio/Portfolio';

function App() {
	return (
		<div className="app">
			<div>
				<Header />
			</div>

			<div>
				<Portfolio />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
