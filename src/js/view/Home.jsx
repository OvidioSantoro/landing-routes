import React from "react";

import Navbar from "./Slides/Navbar/Navbar.jsx";
import PhilosophySlide from "./Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "./Slides/Hydrogen/Hydrogen.jsx";
import CellFuelSlide from "./Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./Slides/PlataformConceptVision/PlataformConceptVision.jsx";
import DesignOne from "./Slides/DesignPack/DesignOne/DesignOne.jsx";
import DesignTwo from "./Slides/DesignPack/DesignTwo/DesignTwo.jsx";
import Contact from "./Slides/Contact&Footer/Contact.jsx";

import Car from "./Slides/DesignPack/Car.png";

import "./Home.scss";

const Home = () => (
	<>
		<div className="text-center mt-5 Slide aling-top bg-transparent bg-dark ">
			<Navbar />
			<div className="row ">
				<PhilosophySlide />
			</div>
			<div className="row">
				<HydrogenSlide />
			</div>
			<div className="row">
				<CellFuelSlide />
			</div>
			<div className="row">
				<PlatConVisionSlide />
			</div>
			<div className="row">
				<DesignOne />
			</div>
			<div className="row">
				<DesignTwo />
			</div>
			<div className="row car-img" id="car">
				<img
					className="img-fluid"
					src={Car}
					alt="Hextasium Hikini Car"
				/>
			</div>
			<div className="row">
				<Contact />
			</div>
		</div>
	</>
);

export default Home;
