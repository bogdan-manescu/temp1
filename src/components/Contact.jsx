import React from "react";
import { grid } from "../images";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
// import Reservations from "./Reservations";
import ContactContent from "./ContactContent";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact | Hai sa luam legatura - PensiuneaGabriel.ro</title>
                <meta
                    name="description"
                    content="Iti stam la dispozitie pentru intrebari legate de rezervari, evenimente sau alte neclaritati. Contacteaza-ne!"
                />
            </Helmet>
            <Navbar />
            <Hero
                carousel={grid}
                staticOverlay={true}
                staticOverlayContent={{
                    title: "Ai o intrebare? Scrie-ne!",
                    subtitle: "ITI RASPUNDEM LA ORICE INTREBARE",
                    cta: "APASA AICI",
                    link: "#contact",
                }}
            />
            {/* <Reservations /> */}
            <ContactContent />
            <Footer />
        </>
    );
};

export default Contact;
