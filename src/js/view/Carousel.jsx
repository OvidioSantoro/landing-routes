import React from "react";

// Components
//Slides
import CellFuelSlide from "./CarouselComponents/Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./CarouselComponents/Slides/PlataformConceptVision/PlataformConceptVision.jsx";

//Footer
import Footer from "./CarouselComponents/Slides/Footer/Footer.jsx";

//Buttons
import CarouselButIndicators from "./CarouselComponents/CarouselButtons/CarouselButtonsIndicators/CarouselButtonsIndicators.jsx";
import CarControlButtons from "./CarouselComponents/CarouselButtons/CarouselControlButtons/CarouselControlButtons.jsx";

// Resources
import Skelleton from "./CarouselComponents/Slides/PlataformConceptVision/SkelletonWithBattery.png";

// Styles
import Style from "./Carousel.scss";

const Carousel = () => (
	<div className="text-center mt-5 Slide aling-top">
		<div
			id="carouselExampleCaptions"
			className="carousel slide carousel-fade "
			data-bs-ride="carousel"
			data-bs-interval="false">
			{/* Carousel Buttons Indicators */}
			<CarouselButIndicators />
			{/**
			 * Main Carousel
			 */}
			<div className="carousel-inner">
				{/* First item */}
				<CellFuelSlide />
				{/* Second item */}
				<div className="carousel-item">
					<img
						src={Skelleton}
						className="d-block w-100"
						alt="Hydrogen battery on car's chasis"
					/>
					<div className="carousel-caption d-none d-md-block"></div>
				</div>
				{/* Third item */}
				<PlatConVisionSlide />
				{/* Fourth item */}
				<div className="carousel-item">
					<Footer />

					{/* <div className="carousel-caption d-none d-md-block Plat"></div> */}
				</div>
			</div>
			{/**
			 * Control buttons
			 */}
			<CarControlButtons />
		</div>
	</div>
);

export default Carousel;
