//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "./index.scss";

//import your own components
import Carousel from "./view/Carousel.jsx";
// import CellFuelText from "./component/CellFuelText.jsx";

// ReactDOM.render(<Hello>How are you?</Hello>, document.querySelector("#app"));
//render your react application
ReactDOM.render(<Carousel />, document.querySelector("#app"));
