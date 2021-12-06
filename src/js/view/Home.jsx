import React from "react";

// Components
//Slides
import Navbar from "./Slides/Navbar/Navbar.jsx";
import NavTabs from "./Nav&Tabs/Nav&Tabs.jsx";
import PhilosophySlide from "./Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "./Slides/Hydrogen/Hydrogen.jsx";
import CellFuelSlide from "./Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./Slides/PlataformConceptVision/PlataformConceptVision.jsx";
import DesignOne from "./Slides/DesignPack/DesignOne/DesignOne.jsx";
import DesignTwo from "./Slides/DesignPack/DesignTwo/DesignTwo.jsx";
import Contact from "./Contact&Footer/Contact.jsx";

// import Footer from "./Slides/Footer/Footer.jsx";

// import CarouselBtnIndicators from "./CarouselComponents/CarouselButtons/CarouselButtonsIndicators/CarouselButtonsIndicators.jsx";
// import CarControlButtons from "./CarouselComponents/CarouselButtons/CarouselControlButtons/CarouselControlButtons.jsx";

// import Car from "./Slides/DesignPack/Car.png";
// import Hextasium from "./Slides/Navbar/HextasiumLogo.png";

import "./Home.scss";

const Home = () => (
	//TODO: NAVBAR
	<>
		<Navbar />
		{/* <PhilosophySlide /> */}
		<Contact />
	</>
);

export default Home;
