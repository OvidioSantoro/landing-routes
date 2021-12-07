import React from "react";
import bootstrap from "bootstrap";

import PhilosophySlide from "./Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "./Slides/Hydrogen/Hydrogen.jsx";
import CellFuelSlide from "./Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./Slides/PlataformConceptVision/PlataformConceptVision.jsx";
import DesignOne from "./Slides/DesignPack/DesignOne/DesignOne.jsx";
import DesignTwo from "./Slides/DesignPack/DesignTwo/DesignTwo.jsx";
import Contact from "./Contact&Footer/Contact.jsx";

const NavTabsTest = () => (
	<div className="d-flex align-items-end">
		<div
			className="nav flex-column nav-pills me-3"
			id="v-pills-tab"
			role="tablist"
			aria-orientation="vertical">
			<button
				className="nav-link active"
				id="v-pills-home-tab"
				data-bs-toggle="pill"
				data-bs-target="#v-pills-philosophy"
				type="button"
				role="tab"
				aria-controls="v-pills-philosophy"
				aria-selected="true">
				1. Philosophy
			</button>
			<button
				className="nav-link"
				id="v-pills-profile-tab"
				data-bs-toggle="pill"
				data-bs-target="#v-pills-hydrogen"
				type="button"
				role="tab"
				aria-controls="v-pills-hydrogen"
				aria-selected="false">
				2. Hydrogen
			</button>
			<button
				className="nav-link"
				id="v-pills-messages-tab"
				data-bs-toggle="pill"
				data-bs-target="#v-pills-cellFuel"
				type="button"
				role="tab"
				aria-controls="v-pills-cellFuel"
				aria-selected="false">
				3. Fuel Cell
			</button>
			<button
				className="nav-link"
				id="v-pills-settings-tab"
				data-bs-toggle="pill"
				data-bs-target="#v-pills-platform"
				type="button"
				role="tab"
				aria-controls="v-pills-platform"
				aria-selected="false">
				4. Platform
			</button>
			<button
				className="nav-link"
				id="v-pills-settings-tab"
				data-bs-toggle="pill"
				data-bs-target="#v-pills-design-1"
				type="button"
				role="tab"
				aria-controls="v-pills-design-1"
				aria-selected="false">
				5. Design 1
			</button>
			<button
				className="nav-link"
				id="v-pills-settings-tab"
				data-bs-toggle="pill"
				data-bs-target="#v-pills-design-2"
				type="button"
				role="tab"
				aria-controls="v-pills-design-2"
				aria-selected="false">
				5.1 Design 2
			</button>
			<button
				className="nav-link"
				id="v-pills-settings-tab"
				data-bs-toggle="pill"
				data-bs-target="#v-pills-contact"
				type="button"
				role="tab"
				aria-controls="v-pills-contact"
				aria-selected="false">
				6. Contact
			</button>
		</div>
		<div className="tab-content" id="v-pills-tabContent">
			<div
				className="tab-pane fade show active"
				id="v-pills-philosophy"
				role="tabpanel"
				aria-labelledby="v-pills-philosophy-tab">
				<PhilosophySlide />
			</div>
			<div
				className="tab-pane fade"
				id="v-pills-hydrogen"
				role="tabpanel"
				aria-labelledby="v-pills-hydrogen-tab">
				<HydrogenSlide />
			</div>
			<div
				className="tab-pane fade"
				id="v-pills-cellFuel"
				role="tabpanel"
				aria-labelledby="v-pills-cellFuel-tab">
				<CellFuelSlide />
			</div>
			<div
				className="tab-pane fade"
				id="v-pills-platform"
				role="tabpanel"
				aria-labelledby="v-pills-platform-tab">
				<PlatConVisionSlide />
			</div>
			<div
				className="tab-pane fade"
				id="v-pills-design-1"
				role="tabpanel"
				aria-labelledby="v-pills-design-1-tab">
				<DesignOne />
			</div>
			<div
				className="tab-pane fade"
				id="v-pills-design-2"
				role="tabpanel"
				aria-labelledby="v-pills-design-2-tab">
				<DesignTwo />
			</div>
			<div
				className="tab-pane fade"
				id="v-pills-contact"
				role="tabpanel"
				aria-labelledby="v-pills-contact-tab">
				<Contact />
			</div>
		</div>
	</div>
);

export default NavTabsTest;
