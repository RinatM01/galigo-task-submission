import React from 'react';
import './Request.css';

export default function Request(props) {
	const { name, logo, hrsSince } = props.req;
	return (
		<div className="Request">
			<div className="logo-container">
				<img src={logo} alt="company logo" />
			</div>
			<div className="meta-data">
				<h1>{name}</h1>
				<p>Sent {hrsSince} hrs ago</p>
			</div>
			<a href="#">Accept</a>
		</div>
	);
}
