import React from 'react';
import display from '../assets/bitmap0587f9e0.png';
import './NavBar.css';

export default function NavBar() {
	return (
		<nav className="NavBar">
			<img srcSet={display} alt="" />
			<div className="NavBar-links">
				<div className="link-container">
					<a href="#">Home</a>
					<div className="indicator active" />
				</div>
				<div className="link-container">
					<a href="#">About</a>
					<div className="indicator" />
				</div>
				<div className="link-container">
					<a href="#">Members</a>
					<div className="indicator" />
				</div>
				<div className="link-container">
					<a href="#">Catalogues</a>
					<div className="indicator" />
				</div>
			</div>
		</nav>
	);
}
