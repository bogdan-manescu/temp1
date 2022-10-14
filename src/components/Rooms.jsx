import React from "react";
import images from "../images";
import Footer from "./Footer";
import HelmetWrapper from "./HelmetWrapper";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Reservations from "./Reservations";
import RoomsContent from "./RoomsContent";

const Rooms = () => {
    return (
        <>
            <HelmetWrapper
                title="Rezerva | Camere? Ai de unde sa alegi - PensiuneaGabriel.ro"
                description="De la 29€/noapte. Bucura-te de camere spatioase, ingrijite, dotate cu tot ce ai nevoie pentru un sejur de vis. Rezerva acum!"
                url="https://pensiuneagabriel.ro/rooms"
            />
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

export default Rooms;
