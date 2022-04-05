import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Slides/Navbar/Navbar.jsx";
import PhilosophySlide from "./Slides/Philosophy/Philosophy.jsx";
import HydrogenSlide from "./Slides/Hydrogen/Hydrogen.jsx";
import CellFuelSlide from "./Slides/CellFuel/CellFuel.jsx";
import PlatConVisionSlide from "./Slides/PlataformConceptVision/PlataformConceptVision.jsx";
import DesignOne from "./Slides/DesignPack/DesignOne/DesignOne.jsx";
import Car from "./Slides/DesignPack/Car/Car.jsx";
import DesignTwo from "./Slides/DesignPack/DesignTwo/DesignTwo.jsx";
import Contact from "./Slides/Contact&Footer/Contact.jsx";
import Footer from "./Slides/Contact&Footer/Footer/Footer.jsx";

import "./Home.scss";

const Home = () => (
	<>
		<Navbar />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PhilosophySlide />}></Route>
				<Route path="/hydrogen" element={<HydrogenSlide />}></Route>
				<Route path="/cellfuel" element={<CellFuelSlide />}></Route>
				<Route path="/vision" element={<PlatConVisionSlide />}></Route>
				<Route path="/design1" element={<DesignOne />}></Route>
				<Route path="/car" element={<Car />}></Route>
				<Route path="/design2" element={<DesignTwo />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</BrowserRouter>
		<Footer />
	</>
);

export default Home;
