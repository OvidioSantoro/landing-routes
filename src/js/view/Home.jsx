import React from "react";

import Navbar from "./Slides/Navbar/Navbar.jsx";
import PhilosophySlide from "./Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "./Slides/Hydrogen/Hydrogen.jsx";
import CellFuelSlide from "./Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./Slides/PlataformConceptVision/PlataformConceptVision.jsx";
import DesignOne from "./Slides/DesignPack/DesignOne/DesignOne.jsx";
import DesignTwo from "./Slides/DesignPack/DesignTwo/DesignTwo.jsx";
import Contact from "./Slides/Contact&Footer/Contact.jsx";

import "./Home.scss";

const Home = () => (
	<>
		<div className="text-center mt-5 Slide aling-top bg-transparent bg-dark ">
			<Navbar />
			<PhilosophySlide />
			<HydrogenSlide />
			{/* <CellFuelSlide /> */}
			{/* <PlatConVisionSlide /> */}
			{/* <DesignOne /> */}
			{/* <DesignTwo /> */}
			{/* <Contact /> */}
		</div>
	</>
);

export default Home;
