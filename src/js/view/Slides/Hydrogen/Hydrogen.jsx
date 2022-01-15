import React from "react";

import HydrogenImage from "./HydrogenImage.png";

import "./Hydrogen.scss";

const HydrogenSlide = () => {
	return (
		<>
			<div className="row" id="hydrogen">
				<div className="col-md-3 col-lg-3"></div>
				<div className="col-md-6">
					<img
						className="img-fluid"
						src="./HydrogenImage.png"
						alt="Hydrogen atom representagion"
					/>
				</div>
				<div className="col-md-3 col-lg-3 text-end lh-lg Hy-text text-wrap">
					<h1>Hydrogen</h1>
					<span>
						<p>
							Hydrogen is a source of life, the lightest element
							in the world and an abundant natural resource. At
							the service of mankind for many years, hydrogen is a
							safe and stable element, approved by Science and a
							synonym of progress. Herald of the energy
							transition, hydrogen is the future of the world.
						</p>
					</span>
				</div>
			</div>
		</>
	);
};

export default HydrogenSlide;
