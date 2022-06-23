import React from 'react';
import classes from './Header.module.css';

export default function Header() {
	return (
		<div className={classes.header}>
			<div className={classes.header__agency}>Agency</div>

			<ul className={classes.header__nav}>
				<li className={classes.header__nav__item}>
					<a href="#">About</a>
				</li>
				<li className={classes.header__nav__item}>
					<a href="#">Services</a>
				</li>
				<li className={classes.header__nav__item}>
					<a href="#">Pricing</a>
				</li>
				<li className={classes.header__nav__item}>
					<a href="#">Blog</a>
				</li>
			</ul>

			<div className={classes.header__button}>
				<button>CONTACT</button>
			</div>

			<div className={classes.header__portfolio}>
				<h1> Portfolio </h1>
				<p>
					Agency provides a full service range including technical skills,
					design, business understanding.
				</p>
			</div>
		</div>
	);
}
