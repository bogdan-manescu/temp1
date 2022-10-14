import React from "react";
import { grid } from "../images";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Reservations from "./Reservations";
import GalleryContent from "./GalleryContent";
import HelmetWrapper from "./HelmetWrapper";

const Gallery = () => {
    return (
        <>
            <HelmetWrapper
                title="Galerie | Uite ce te asteapta la Pensiunea Gabriel - PensiuneaGabriel.ro"
                description="Confort si atmosfera relaxanta, intr-un singur loc. Convinge-te singur de facilitatile Pensiunii Gabriel. Vezi galeria acum!"
                url="https://pensiuneagabriel.ro/gallery"
            />
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
