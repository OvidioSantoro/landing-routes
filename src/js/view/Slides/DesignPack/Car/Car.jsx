import React from "react";

import CarImage from "./Car.png";
import "./Car.scss";

const Car = () => {
	return (
		<div className="car-image">
			<img className="img-fluid" src={CarImage} alt="Full car image" />
		</div>
	);
};

export default Car;
