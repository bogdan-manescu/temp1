import React from "react";
import { Helmet } from "react-helmet";
import images from "../images";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Reservations from "./Reservations";
import RoomsContent from "./RoomsContent";

const Rooms = () => {
    return (
        <>
            <Helmet>
                <title>Rezerva | Camere? Ai de unde sa alegi - PensiuneaGabriel.ro</title>
                <meta
                    name="description"
                    content="De la 29€/noapte. Bucura-te de camere spatioase, ingrijite, dotate cu tot ce ai nevoie pentru un sejur de vis. Rezerva acum!"
                />
            </Helmet>
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
