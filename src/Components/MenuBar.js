import React from 'react';
import logo from '../assets/bitmap374709aa.png';
import avatar from '../assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import './MenuBar.css';

export default function MenuBar() {
	return (
		<header className="MenuBar">
			<div className="MenuBar-logo">
				<img srcSet={logo} alt="display" />
				<h1>galigo</h1>
			</div>
			<div className="MenuBar-search">
				<FontAwesomeIcon className="MenuBar-icon" icon={faSearch} />
				<input type="text" placeholder="Search..." />
			</div>
			<div className="MenuBar-user">
				<FontAwesomeIcon icon={faBell} className="MenuBar-icon" />
				<div className="user-data">
					<img srcSet={avatar} alt="avatar" />
					<p className="username">Rachel</p>
					<FontAwesomeIcon
						className="MenuBar-icon"
						icon={faAngleDown}
					/>
				</div>
			</div>
		</header>
	);
}
