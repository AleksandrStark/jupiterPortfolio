import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Portfolio from './components/main/portfolio/Portfolio';

function App() {
	return (
		<div className="main">
			<Header />
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
