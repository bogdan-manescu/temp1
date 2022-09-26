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

const App = () => {
    useEffect(() => {
        Aos.init({ duration: 700, easing: "ease-in-out", once: true });
    }, []);

    return (
        <>
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
