import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../images/logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/navbar.css";
import { GetWindowDimensions } from "../utils";
import zIndex from "@mui/material/styles/zIndex";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const { width, height } = GetWindowDimensions();

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY > lastScrollPosition && showNavbar) {
                setShowNavbar(false);
            } else if (window.scrollY < lastScrollPosition && !showNavbar) {
                setShowNavbar(true);
            }
        }

        setLastScrollPosition(window.scrollY);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [lastScrollPosition]);

    return (
        <>
            <div
                className={`navbar ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}
                style={{ height: "67.75px" }}
            />
            <div
                className="mobile-menu"
                style={
                    showMenu && width <= 768
                        ? { zIndex: 5, opacity: 1, top: "0" }
                        : { zIndex: -1, opacity: 0, top: "-100px" }
                }
            >
                <div className="navbar-menu navbar-menu-mobile-container">
                    <a className="navbar-menu-link" href="/">
                        Acasa
                    </a>
                    <a className="navbar-menu-link" href="/gallery">
                        Galerie
                    </a>
                    <a className="navbar-menu-link" href="/rooms">
                        Rezerva
                    </a>
                    <a className="navbar-menu-link" href="/contact">
                        Contact
                    </a>
                </div>
            </div>
            <div
                className={`navbar navbar-top ${
                    showNavbar || showMenu ? "navbar-visible" : "navbar-hidden"
                }`}
            >
                <div className="navbar-container">
                    <div className="navbar-logo" data-aos="fade-left">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-phone" data-aos="fade-left" data-aos-duration="900">
                        <PhoneIcon />
                        <p>0752 835 174</p>
                    </div>
                    <div className="navbar-menu" data-aos="fade-left" data-aos-duration="1100">
                        <a className="navbar-menu-link" href="/">
                            Acasa
                        </a>
                        <a className="navbar-menu-link" href="/gallery">
                            Galerie
                        </a>
                        <a className="navbar-menu-link" href="/rooms">
                            Rezerva
                        </a>
                        <a className="navbar-menu-link" href="/contact">
                            Contact
                        </a>
                    </div>
                    <div className="navbar-menu-mobile" onClick={() => setShowMenu(!showMenu)}>
                        {showMenu ? <CloseIcon /> : <MenuIcon />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
