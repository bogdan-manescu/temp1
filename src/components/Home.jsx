import React from "react";
import images from "../images";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Reservations from "./Reservations";
import HomeContent from "./HomeContent";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero carousel={images.carousel.home} />
            <Reservations />
            <HomeContent />
            <Footer />
        </>
    );
};

export default Home;
