import React from "react";

// Components
//Slides
import Navbar from "./CarouselComponents/Slides/Navbar/Navbar.jsx";
import PhilosophySlide from "./CarouselComponents/Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "./CarouselComponents/Slides/Hydrogen/Hydrogen.jsx";
import CellFuelSlide from "./CarouselComponents/Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./CarouselComponents/Slides/PlataformConceptVision/PlataformConceptVision.jsx";

//Footer
import Footer from "./CarouselComponents/Slides/Footer/Footer.jsx";

//Buttons
import CarouselButIndicators from "./CarouselComponents/CarouselButtons/CarouselButtonsIndicators/CarouselButtonsIndicators.jsx";
import CarControlButtons from "./CarouselComponents/CarouselButtons/CarouselControlButtons/CarouselControlButtons.jsx";

// Resources
import Car from "./CarouselComponents/Slides/DesignPack/Car.png";
import Hextasium from "./CarouselComponents/Slides/Navbar/HextasiumLogo.png";

// Styles
import "./Carousel.scss";

const Carousel = () => (
	//TODO: NAVBAR
	<>
		<div className="text-center mt-5 Slide aling-top">
			<Navbar />
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
					{/* TODO:First item */}
					<PhilosophySlide />
					{/* TODO:Second item */}
					<HydrogenSlide />
					{/* TODO:Third item */}
					<CellFuelSlide />
					{/* Fourth item */}
					<PlatConVisionSlide />
					{/* Fifth item */}
					{/* Sixth item */}
					<div className="carousel-item">
						<img
							src={Car}
							className="d-block w-100"
							alt="Hydrogen battery on car's chasis"
						/>
						<div className="carousel-caption d-none d-md-block"></div>
					</div>
					{/* TODO:Seventh item */}
					{/* Last item */}
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
	</>
);

export default Carousel;

/* <div className="carousel-item">
					<img
						src={Skelleton}
						className="d-block w-100"
						alt="Hydrogen battery on car's chasis"
					/>
					<div className="carousel-caption d-none d-md-block"></div> 
	</div>				
*/
/**
 * !ROJO
 * ?Azul
 * TODO Naranja
 * @params {array} arrayName
 * @return lsajdfñlkasf
 */
