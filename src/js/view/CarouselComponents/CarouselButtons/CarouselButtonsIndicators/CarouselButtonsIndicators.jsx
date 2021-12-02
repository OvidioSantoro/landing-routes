import React from "react";

const CarouselButIndicators = () => (
	<div className="carousel-indicators">
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="0"
			className="active"
			aria-current="true"
			aria-label="Slide 4"></button>
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="1"
			aria-label="Slide 5"></button>
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="2"
			aria-label="Slide 6"></button>
		<button
			type="button"
			data-bs-target="#carouselExampleCaptions"
			data-bs-slide-to="3"
			aria-label="Slide 7"></button>
	</div>
);

export default CarouselButIndicators;
