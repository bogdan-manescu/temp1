import React from "react";
import images from "../images";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Reservations from "./Reservations";
import RoomsContent from "./RoomsContent";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero
                carousel={images.carousel.rooms}
                staticOverlay={true}
                staticOverlayContent={{
                    title: "Camere? Ai de unde sa alegi",
                    subtitle: "CONFORT, ATMOSFERA RELAXANTA, TOATE INTR-UN SINGUR LOC",
                    cta: "APASA AICI",
                    link: "#rooms",
                }}
            />
            <Reservations />
            <RoomsContent />
            <Footer />
        </>
    );
};

export default Home;
