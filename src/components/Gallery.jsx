import React from "react";
import { grid } from "../images";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Reservations from "./Reservations";
import GalleryContent from "./GalleryContent";

const Gallery = () => {
    return (
        <>
            <Navbar />
            <Hero
                carousel={grid}
                staticOverlay={true}
                staticOverlayContent={{
                    title: "Uite ce te asteapta la pensiune",
                    subtitle: "CONFORT, ATMOSFERA RELAXANTA, TOATE INTR-UN SINGUR LOC",
                    cta: "APASA AICI",
                    link: "#gallery",
                }}
            />
            <Reservations />
            <GalleryContent />
            <Footer />
        </>
    );
};

export default Gallery;
