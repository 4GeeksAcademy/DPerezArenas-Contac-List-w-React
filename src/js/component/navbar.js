import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="container navbar navbar-light mb-3">
				<span className="navbar-brand mb-0 h1">Contact List</span>
			<div className="ml-auto">
				<Link to="/new-contact">
					<button className="btn btn-primary">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
