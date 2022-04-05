import React from "react";

import Battery from "./batterySmall.png";
import "./CellFuel.scss";

const CellFuelSlide = () => (
	<div className="CellFuel" id="cellFuel">
		<div className="Cell">
			<h1>Cell Fuel System</h1>
			<span>
				<div className="row lh-lg">
					<div className="col-xs-5 col-lg-4">
						<p className="firstP text-start m-5">
							The fuel cell system transforms air and hydrogen
							into energy, two elements that are found abundantly
							in nature. Beyond the electricity generated to power
							the vehicle, the fuel cell emits nothing but
							<b> water</b>. A High Technology Manufacturer,
							Hextasium is the first automotive company to develop
							a fuel cell offering exceptional performances in a
							high-end vehicle.
						</p>
					</div>
					<div className="col-xs-2 col-lg-4">
						<img
							src={Battery}
							alt="Hydrogen battery cell fuel"
							className="img-fluid"
						/>
					</div>
					<div className="col-xs-5 col-lg-4">
						<p className="secondP text-end m-5">
							However, the system for efficiently and rapidly
							extracting hydrogen from nature is highly polluting.
							For to date, 95% of hydrogen is still produced by
							fossil fuels, because the cleanest system, depending
							on the source of the electrivity, is electrolysis,
							which is expensive and highly inefficient.
							<b> Nontheless</b>, there are new enterprises
							starting to get green hydrogen due to new researches
							and technology advances.
						</p>
					</div>
				</div>
			</span>
		</div>
	</div>
);

export default CellFuelSlide;
