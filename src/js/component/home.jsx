import React from "react";

//Components
import Slide from "./slide.jsx";
import CellFuelText from "./cellFuelText.jsx";

//Resources
import Image from "../../img/battery.png";

//Styles
// import text from "../../styles/text.scss";

const Home = () => {
	return (
		<div className="text-center mt-5 Slide">
			<Slide text={CellFuelText} />
		</div>
	);
};

export default Home;
