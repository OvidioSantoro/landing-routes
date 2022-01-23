import React from "react";

import Map from "./map.png";

import "./Contact.scss";

const Contact = () => (
	<>
		<div className="row ContactSlide" id="contact">
			<div className="col-ms-1 col-lg-1"></div>
			<div className="col-ms-10 col-lg-10">
				<div className="row">
					<div className=" col-ms-4 col-lg-4 contact">
						<b className="highlight"> Headquarters </b>
						<br />
						<span>
							Hopium S.A.
							<br />
							<a
								className="link-info text-decoration-none"
								href="https://www.google.com/maps/"
								target=" _blank ">
								4 Saint Îlle École, 75000 Paris
							</a>
							<br />
							<br />
							<a
								className="link-info text-decoration-none"
								href="tel:+33185736767">
								+ 555 1 55 78 90 47
							</a>
						</span>
						<br />
						<br />
						<br />
						<b className="highlight"> Test center </b>
						<br />
						<span>
							Autodrome de Linois-Montlhéry
							<br />
							Avenue Georges Boillotte, 91510 Linas
						</span>
						<br />
						<br />
						<br />
						<b className="highlight"> Studio engineering </b>
						<br />
						<span>
							Hextasium UG
							<br />
							Munich
						</span>
						<br />
						<br />
						<br />
						<b className="highlight"> Blockchain lab </b>
						<br />
						<span>
							UNA Blockchain
							<br />
							Los Angeles, CA
						</span>
						<br />
						<br />
						<br />
						<span className="subs"> General enquiries </span>
						<br />
						<a
							href="mailto:contact@hextasium.com"
							className="link-info text-decoration-none">
							contact@hextasium.com
						</a>
						<br />
						<br />
						<span className="subs"> Pre - orders </span>
						<br />
						<a
							href="mailto:reserve@hextasium.com"
							className="link-info text-decoration-none">
							reserve@hextasium.com
						</a>
						<br />
						<br />
						<span className="subs"> Media enquiries </span>
						<br />
						<a
							href="mailto:media@hextasium.com"
							className="link-info text-decoration-none">
							media@hextasium.com
						</a>
					</div>
					<div className="col-ms-7 col-lg-7 mt-5">
						<img
							className="img-fluid map-image"
							src={Map}
							alt="Map of the zones selling Hextasium Mīkini model car"
						/>
					</div>
					{/*</div> */}
				</div>
			</div>
			<div className="col-ms-1 col-lg-1"></div>
		</div>
	</>
);

export default Contact;
