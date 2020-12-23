import React from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Post(props) {
	const {
		author,
		position,
		logo,
		hrsSince,
		text,
		img,
		numLikes
	} = props.post;
	return (
		<div className="Post">
			<header>
				<span className="logo-container">
					<img src={logo} alt="user logo" />
				</span>
				<span className="author-data">
					<h1>{author}</h1>
					<p>{position}</p>
				</span>
				<span className="time-tag">{hrsSince} hrs ago</span>
			</header>
			<section className="post-content">
				{text ? <p className="post-text">{text}</p> : null}
				{img ? <img src={img} alt="post" /> : null}
			</section>
			<footer>
				<FontAwesomeIcon className="icon" icon={faHeart} /> {numLikes}
			</footer>
		</div>
	);
}
