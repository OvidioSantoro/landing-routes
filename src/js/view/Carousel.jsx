import React from "react";

import CellFuelSlide from "./CarouselComponents/Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./CarouselComponents/Slides/PlataformConceptVision/PlataformConceptVision.jsx";
import DesignOne from "./CarouselComponents/Slides/DesignPack/DesignOne/DesignOne.jsx";
import DesignTwo from "./CarouselComponents/Slides/DesignPack/DesignTwo/DesignTwo.jsx";

import Footer from "./CarouselComponents/Slides/Footer/Footer.jsx";

import CarouselBtnIndicators from "./CarouselComponents/CarouselButtons/CarouselButtonsIndicators/CarouselButtonsIndicators.jsx";
import CarControlButtons from "./CarouselComponents/CarouselButtons/CarouselControlButtons/CarouselControlButtons.jsx";

import Car from "./CarouselComponents/Slides/DesignPack/Car.png";

import "./Carousel.scss";

const Carousel = () => (
	const HextasiumCarousel = () => (
    //TODO: NAVBAR
    <div className="text-center mt-5 Slide aling-top">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
        data-bs-interval="false">
        {/* Carousel Buttons Indicators */}
        <CarouselBtnIndicators />
        
        {/**
         * Main Carousel
         */}
        <div className="carousel-inner">
          {/* TODO:First item */}
          {/* TODO:Second item */}
          {/* TODO:Third item */}
          <CellFuelSlide />
          {/* Fourth item */}
          <PlatConVisionSlide />
          {/* Fifth item */}
          {/* <DesignOne /> */}
          {/* Sixth item */}
          {/* <div className="carousel-item">
            <img
              src={Car}
              className="d-block w-100"
              alt="Hydrogen battery on car's chasis"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div> */}
          {/* TODO:Seventh item */}
          {/* <DesignTwo /> */}
          {/* Last item */}
          {/* <div className="carousel-item">
            <Footer />
  
            {/* <div className="carousel-caption d-none d-md-block Plat"></div> */}
          {/**</div> */}
        </div>
        {/**
         * Control buttons
         */}
        <CarControlButtons />
      </div>
    </div>
  );
  
  export default HextasiumCarousel;
);

export default Carousel;
