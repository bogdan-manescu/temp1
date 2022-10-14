import React from "react";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/footer.css";

const Footer = () => {
    return (
        <>
            <div className="home-container-location-wrapper">
                <div className="home-container-location">
                    <div className="home-container-location-content" data-aos="fade-right">
                        <h2 className="home-location-title">Locatia noastra</h2>
                        <div
                            className="footer-menu-line"
                            data-aos="zoom-in-right"
                            data-aos-duration="1400"
                        />
                        <div className="home-location-items">
                            <p className="home-location-item">
                                <LocationOnOutlinedIcon />
                                <span>
                                    Strada Principala 136,
                                    <br />
                                    220022 Corcova, România
                                </span>
                            </p>
                            <p className="home-location-item">
                                <LocationOnOutlinedIcon />
                                <span>
                                    <a
                                        href="https://www.google.com/maps?ll=44.697113,23.04174&z=16&t=m&hl=ro&gl=RO&mapclient=embed&cid=10920822203427949438"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Deschide harta marita
                                    </a>
                                </span>
                            </p>
                            <p className="home-location-item">
                                <PhoneOutlinedIcon />
                                <span>0752 835 174</span>
                            </p>
                            <p className="home-location-item">
                                <WhatsAppIcon />
                                <span>
                                    <a
                                        href="http://wa.me/40752835174"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        0752 835 174
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="home-container-location-map" data-aos="fade-up">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.102154455227!2d23.03955101593412!3d44.69711327909935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475243e7f6c507e9%3A0x978e8deeda858b7e!2sPensiunea%20Gabriel!5e0!3m2!1sro!2sro!4v1663697550224!5m2!1sro!2sro"
                            title="Locatia pe harta a Pensiunii Gabriel"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <h1 className="footer-container-title">PENSIUNEA GABRIEL CORCOVA</h1>
                    <div className="footer-container-content">
                        <div className="footer-container-content-item">
                            <div className="footer-menu-line" data-aos="zoom-in-right" />
                            <h2>Meniu</h2>
                            <p className="footer-menu-item">
                                <a href="/">Acasa</a>
                            </p>
                            <p className="footer-menu-item">
                                <a href="/gallery">Galerie</a>
                            </p>
                            <p className="footer-menu-item">
                                <a href="/rooms">Rezerva</a>
                            </p>
                            <p className="footer-menu-item">
                                <a href="/contact">Contact</a>
                            </p>
                        </div>
                        <div className="footer-container-content-item">
                            <div className="footer-menu-line" data-aos="zoom-in-right" />
                            <h2>Ai intrebari? Ne gasesti la:</h2>
                            <p className="footer-menu-item">
                                <EmailOutlinedIcon />
                                <span>gabi_dur@yahoo.com</span>
                            </p>
                            <p className="footer-menu-item">
                                <PhoneOutlinedIcon />
                                <span>0752 835 174</span>
                            </p>
                            <p className="footer-menu-item">
                                <WhatsAppIcon />
                                <span>
                                    <a
                                        href="http://wa.me/40752835174"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        0752 835 174
                                    </a>
                                </span>
                            </p>
                            <p className="footer-menu-item">
                                <FacebookIcon />
                                <span>
                                    <a
                                        href="https://www.facebook.com/pensiuneagabriel/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        pensiuneagabriel
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div className="footer-container-content-item">
                            <div className="footer-menu-line" data-aos="zoom-in-right" />
                            <h2>Adresa</h2>
                            <p className="footer-menu-item">
                                <LocationOnOutlinedIcon />
                                <span>
                                    Strada Principala 136,
                                    <br />
                                    220022 Corcova, Romania
                                </span>
                            </p>
                            <p className="footer-menu-item">
                                <LocationOnOutlinedIcon />
                                <span>
                                    <a
                                        href="https://www.google.com/maps?ll=44.697113,23.04174&z=16&t=m&hl=ro&gl=RO&mapclient=embed&cid=10920822203427949438"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Vezi locatia
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="footer-container-madeby">
                        <div>
                            <a
                                href="http://instagram.com/tezeractmedia"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Designed by <span>TEZERACT MEDIA</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
