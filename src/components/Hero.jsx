import React from "react";
import Swiper from "react-id-swiper";
import "../styles/hero.css";
import "swiper/css/swiper.css";
import { Link } from "react-router-dom";

const Hero = ({ carousel, staticOverlay = false, staticOverlayContent = {} }) => {
    const swiperParams = {
        preloadImages: true,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        speed: 700,
        parallax: true,
    };

    return (
        <div className="hero" data-aos="fade-down">
            <div className="slider">
                {staticOverlay && (
                    <div className="content-overlay">
                        <div className="content" data-aos="fade-down">
                            <p className="content-subtitle">{staticOverlayContent.subtitle}</p>
                            <h1 className="content-title">{staticOverlayContent.title}</h1>
                            <a href={`${staticOverlayContent.link}`}>
                                <button className="content-cta" data-swiper-parallax={1000}>
                                    {staticOverlayContent.cta}
                                </button>
                            </a>
                        </div>
                    </div>
                )}
                <Swiper {...swiperParams}>
                    {carousel.map((el, idx) => (
                        <div key={idx}>
                            {!staticOverlay && (
                                <div className="content" data-aos="fade-down">
                                    <p className="content-subtitle" data-swiper-parallax={800}>
                                        {el.subtitle}
                                    </p>
                                    <h1 className="content-title" data-swiper-parallax={900}>
                                        {el.title}
                                    </h1>
                                    {el.anchor ? (
                                        <a href={`${el.link}`}>
                                            <button
                                                className="content-cta"
                                                data-swiper-parallax={1000}
                                            >
                                                {el.cta}
                                            </button>
                                        </a>
                                    ) : (
                                        <Link to={`${el.link}`}>
                                            <button
                                                className="content-cta"
                                                data-swiper-parallax={1000}
                                            >
                                                {el.cta}
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            )}
                            <div
                                data-swiper-parallax={"70%"}
                                className="slider-bg"
                                style={{ backgroundImage: `url(${el.image})` }}
                            />
                        </div>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;
