import React from 'react';
import MenuBar from '../Components/MenuBar';
import NavBar from '../Components/NavBar';
import Request from '../Components/Request';
import Post from '../Components/Post';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFileImage, faLink } from '@fortawesome/free-solid-svg-icons';
import { data } from '../Constants/Data';

export default function Home() {
	const { name, logo, numMembers, numRequests, requestsList, posts } = data;
	return (
		<div className="Home">
			<section className="Home-top">
				<MenuBar />
				<NavBar />
			</section>
			<section className="Home-content">
				<aside className="members container">
					<div className="company-avatar">
						<div className="logo-container">
							<img src={logo} alt="company logo" />
						</div>
						<h1>{name}</h1>
					</div>
					<div className="company-data">
						<div>
							<div className="nums">{numMembers}</div>
							<div className="label">Members</div>
						</div>
						<div>
							<div className="nums">{numRequests}</div>
							<div className="label">Requests</div>
						</div>
					</div>
					<a href="#">Update Members</a>
				</aside>
				<section className="feed">
					<div className="create container">
						<div className="select-menu">
							<span className="select-active">
								<FontAwesomeIcon
									className="icon"
									icon={faEdit}
								/>
								Share an update
							</span>
							<span>
								<FontAwesomeIcon
									className="icon"
									icon={faFileImage}
								/>Upload a photo
							</span>
							<span>
								<FontAwesomeIcon
									className="icon"
									icon={faLink}
								/>Write an article
							</span>
						</div>
						<input type="text" placeholder="Write Something ..." />
					</div>
					{posts.map((post) => (
						<div className="container">
							<Post post={post} key={post.id} />
						</div>
					))}
				</section>
				<aside className="requests container">
					<h1 className="title">Member Requests</h1>
					<div className="request-list">
						{requestsList.map((req) => (
							<Request req={req} key={req.id} />
						))}
					</div>
					<a href="#">Review All Requests</a>
				</aside>
			</section>
		</div>
	);
}
