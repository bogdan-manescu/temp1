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
                className={`navbar ${
                    showNavbar || width <= 768 ? "navbar-visible" : "navbar-hidden"
                }`}
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
                    showNavbar || showMenu || width <= 768 ? "navbar-visible" : "navbar-hidden"
                }`}
            >
                <div className="navbar-container">
                    <div className="navbar-logo" data-aos="fade-left">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
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
                        <svg
                            class={`ham ham6${showMenu ? " active" : ""}`}
                            viewBox="0 0 100 100"
                            width="80"
                            onclick="this.classList.toggle('active')"
                        >
                            <path
                                class="line top"
                                d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                            />
                            <path
                                class="line middle"
                                d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                            />
                            <path
                                class="line bottom"
                                d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
