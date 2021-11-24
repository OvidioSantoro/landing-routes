import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//Components
import CellFuelText from "./cellFuelText.jsx";

//Resources
import Battery from "../../img/battery.png";

//Styles
import Style from "../../styles/slide.scss";
import propTypes from "prop-types";

const Slide = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-ms-6 col-lg-6">
					<img src={Battery} alt="Hydrogen Fuel Battery" />
				</div>
				<div className="col-ms-6 col-lg-6">{props.text}</div>
			</div>
		</div>
	);
};

Slide.PropTypes = {
	text: PropTypes.string
};

export default Slide;
