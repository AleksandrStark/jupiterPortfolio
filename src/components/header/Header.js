import React from 'react';
export default function Header() {
	return (
		<div className="header">
			<div className="header__navbar">
				<div className="header__agency"> Agency</div>

				<ul className="header__nav">
					<li className="header__nav__item">
						<a href="#">About</a>
					</li>
					<li className="header__nav__item">
						<a href="#">Services</a>
					</li>
					<li className="header__nav__item">
						<a href="#">Pricing</a>
					</li>
					<li className="header__nav__item">
						<a href="#">Blog</a>
					</li>
				</ul>

				<div className="header__button">
					<button>CONTACT</button>
				</div>
			</div>

			<div className="header__portfolio">
				<h1> Portfolio </h1>
				<p>
					Agency provides a full service range including technical skills,
					design, business understanding.
				</p>
			</div>
		</div>
	);
}
