import React from "react";

// import Navbar from "../Slides/Navbar/Navbar.jsx";
import Philosophy from "../Slides/Philosophy/Philosophy.jsx";

import "./Nav&Tabs.scss";

const NavTabs = () => (
	<>
		<ul className="nav nav-tabs" id="myTab" role="tablist">
			<li className="nav-item" role="presentation">
				<button
					className="nav-link active"
					id="home-tab"
					data-bs-toggle="tab"
					data-bs-target="#home"
					type="button"
					role="tab"
					aria-controls="home"
					aria-selected="true">
					Home
				</button>
			</li>
			<li className="nav-item" role="presentation">
				<button
					className="nav-link"
					id="profile-tab"
					data-bs-toggle="tab"
					data-bs-target="#profile"
					type="button"
					role="tab"
					aria-controls="profile"
					aria-selected="false">
					Profile
				</button>
			</li>
			<li className="nav-item" role="presentation">
				<button
					className="nav-link"
					id="messages-tab"
					data-bs-toggle="tab"
					data-bs-target="#messages"
					type="button"
					role="tab"
					aria-controls="messages"
					aria-selected="false">
					Messages
				</button>
			</li>
			<li className="nav-item" role="presentation">
				<button
					className="nav-link"
					id="settings-tab"
					data-bs-toggle="tab"
					data-bs-target="#settings"
					type="button"
					role="tab"
					aria-controls="settings"
					aria-selected="false">
					Settings
				</button>
			</li>
		</ul>

		{/* <!-- Tab panes --> */}
		<div className="tab-content">
			<div
				className="tab-pane active"
				id="home"
				role="tabpanel"
				aria-labelledby="home-tab">
				<Philosophy />
			</div>
			<div
				className="tab-pane"
				id="profile"
				role="tabpanel"
				aria-labelledby="profile-tab">
				...
			</div>
			<div
				className="tab-pane"
				id="messages"
				role="tabpanel"
				aria-labelledby="messages-tab">
				...
			</div>
			<div
				className="tab-pane"
				id="settings"
				role="tabpanel"
				aria-labelledby="settings-tab">
				...
			</div>
		</div>
	</>
);

export default NavTabs;
