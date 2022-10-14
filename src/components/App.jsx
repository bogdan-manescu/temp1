import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Hero from "./Hero";
import Home from "./Home";
import Contact from "./Contact";
import Rooms from "./Rooms";
import Gallery from "./Gallery";
// import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const App = () => {
    useEffect(() => {
        Aos.init({ duration: 700, easing: "ease-in-out", once: true });
    }, []);

    return (
        <>
            <Helmet>
                <title>
                    Bun venit la Pensiunea Gabriel - PensiuneaGabriel.ro | Cazare in Corcova
                </title>
                <meta
                    name="description"
                    content="Traieste o experienta de patru stele la Pensiunea Gabriel. Beneficiezi de piscina in aer liber, plaja privata, zona de gratar, lunge, bucatarie, loc de joaca pentru copii, internet gratuit si parcare privata."
                />
            </Helmet>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
