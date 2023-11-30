import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="container navbar navbar-light mb-3">
			<Link to="/" className="link-underline-light">
				<span className="navbar-brand btn btn-light mb-0 h1">Contact List</span>
			</Link>
			<div className="ms-auto">
				<Link to="/new">
					<button className="btn btn-primary">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
