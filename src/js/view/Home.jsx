import React from "react";

// Components
import Carousel from "./Carousel.jsx";
//Slides
import CellFuelSlide from "./CarouselComponents/Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./CarouselComponents/Slides/PlataformConceptVision/PlataformConceptVision.jsx";
import DesignOne from "./CarouselComponents/Slides/DesignPack/DesignOne/DesignOne.jsx";
import DesignTwo from "./CarouselComponents/Slides/DesignPack/DesignTwo/DesignTwo.jsx";

//Footer
import Footer from "./CarouselComponents/Slides/Footer/Footer.jsx";

//Buttons
import CarouselBtnIndicators from "./CarouselComponents/CarouselButtons/CarouselButtonsIndicators/CarouselButtonsIndicators.jsx";
import CarControlButtons from "./CarouselComponents/CarouselButtons/CarouselControlButtons/CarouselControlButtons.jsx";

// Resources
import Car from "./CarouselComponents/Slides/DesignPack/Car.png";

// Styles
import "./Carousel.scss";

const Home = () => (
	//TODO: NAVBAR
	<Carousel />
);

export default Home;
