import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import injectContext from "./store/appContext.js";
import { Footer } from "./component/footer";
import { Agenda } from "./views/Agenda.jsx";
import { AddContact } from "./views/AddContact.jsx";
import { DeleteContact } from "./component/DeleteContact.jsx";
import { Navbar } from './component/navbar.js'

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Agenda />} />
					{/* <Route path="/modal" element={<DeleteContact />} /> */}
					<Route path="/:idContact" element={<AddContact />} />
					<Route path="*" element={<h1>Error 404 - Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
