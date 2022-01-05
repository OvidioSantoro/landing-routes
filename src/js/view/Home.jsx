import React from "react";

// Components
//Slides
import Navbar from "./Slides/Navbar/Navbar.jsx";
import PhilosophySlide from "./Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "./Slides/Hydrogen/Hydrogen.jsx";
import CellFuelSlide from "./Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./Slides/PlataformConceptVision/PlataformConceptVision.jsx";
import DesignOne from "./Slides/DesignPack/DesignOne/DesignOne.jsx";
import DesignTwo from "./Slides/DesignPack/DesignTwo/DesignTwo.jsx";
import Contact from "./Slides/Contact&Footer/Contact.jsx";


import CarouselBtnIndicators from "./CarouselComponents/CarouselButtons/CarouselButtonsIndicators/CarouselButtonsIndicators.jsx";
import CarControlButtons from "./CarouselComponents/CarouselButtons/CarouselControlButtons/CarouselControlButtons.jsx";


import "./Home.scss";

const Home = () => (
	
	<>
		<div className="text-center mt-5 Slide aling-top">
			<Navbar />
			<div
				id="carouselExampleCaptions"
				className="carousel slide carousel-fade "
				data-bs-ride="carousel"
				data-bs-interval="false">
				<CarouselBtnIndicators />

				
				<div className="carousel-inner">
					<PhilosophySlide />
					<HydrogenSlide />
					<CellFuelSlide />
					<PlatConVisionSlide />
					<DesignOne />
					<DesignTwo />
					<Contact />
				</div>
				
				<CarControlButtons />
			</div>
		</div>
	</>
);

export default Home;
