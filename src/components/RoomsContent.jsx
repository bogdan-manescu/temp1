import React from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import images from "../images";
import MicrowaveOutlinedIcon from "@mui/icons-material/MicrowaveOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import CoffeeMakerOutlinedIcon from "@mui/icons-material/CoffeeMakerOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import "../styles/rooms.css";

const Room = ({ title, description, images, tags }) => {
    const params = {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    return (
        <div className="rooms-container-item" data-aos="fade-up">
            <div
                className="rooms-container-item-carousel"
                data-aos="fade-up"
                data-aos-duration={900}
            >
                <Swiper {...params}>
                    {images.map((el, idx) => (
                        <div key={idx} className="room-carousel-slide">
                            <img src={el.image} alt={el.alt} />
                        </div>
                    ))}
                </Swiper>
            </div>
            <div className="rooms-container-item-description" data-aos="fade-up">
                <h1 className="rooms-description-title" data-aos="fade=up">
                    {title}
                </h1>
                <div data-aos="fade-up" data-aos-duration={800}>
                    {description}
                </div>
                <div className="rooms-description-tags">
                    {tags.map((tag, idx) => (
                        <div
                            key={idx}
                            className="rooms-description-tag"
                            data-aos="fade-up"
                            data-aos-duration={700 + idx * 50}
                        >
                            {tag.icon}
                            <span>{tag.label}</span>
                        </div>
                    ))}
                </div>
                <div className="rooms-description-cta" data-aos="fade-up" data-aos-duration={1100}>
                    <a href={`#reservation`}>
                        <button className="content-cta">REZERVA</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const RoomsContent = () => {
    const tags = {
        king: [
            { icon: <MicrowaveOutlinedIcon />, label: "Bucatarie privata" },
            { icon: <BathtubOutlinedIcon />, label: "Baie privata" },
            { icon: <PoolOutlinedIcon />, label: "Piscina privata" },
            { icon: <DeckOutlinedIcon />, label: "Balcon" },
            { icon: <LocalFloristOutlinedIcon />, label: "Vedere la gradina" },
            { icon: <PoolOutlinedIcon />, label: "Vedere la piscina" },
            { icon: <BathtubOutlinedIcon />, label: "Cada" },
            { icon: <AcUnitOutlinedIcon />, label: "Aer conditionat" },
            { icon: <BathtubOutlinedIcon />, label: "Cada spa" },
            { icon: <TvOutlinedIcon />, label: "TV cu ecran plat" },
            { icon: <OutdoorGrillOutlinedIcon />, label: "Gratar" },
            { icon: <DeckOutlinedIcon />, label: "Terasa" },
            { icon: <CoffeeMakerOutlinedIcon />, label: "Masina de cafea" },
            { icon: <WifiOutlinedIcon />, label: "WiFi gratuit" },
        ],
        twin: [
            { icon: <MicrowaveOutlinedIcon />, label: "Bucatarie privata" },
            { icon: <BathtubOutlinedIcon />, label: "Baie privata" },
            { icon: <PoolOutlinedIcon />, label: "Piscina privata" },
            { icon: <DeckOutlinedIcon />, label: "Balcon" },
            { icon: <LocalFloristOutlinedIcon />, label: "Vedere la gradina" },
            { icon: <BathtubOutlinedIcon />, label: "Cada" },
            { icon: <AcUnitOutlinedIcon />, label: "Aer conditionat" },
            { icon: <TvOutlinedIcon />, label: "TV cu ecran plat" },
            { icon: <OutdoorGrillOutlinedIcon />, label: "Gratar" },
            { icon: <DeckOutlinedIcon />, label: "Terasa" },
            { icon: <CoffeeMakerOutlinedIcon />, label: "Masina de cafea" },
            { icon: <WifiOutlinedIcon />, label: "WiFi gratuit" },
        ],
    };

    const carousel = [...images.rooms, ...images.bathrooms];

    return (
        <div className="rooms" id="rooms">
            <div className="rooms-container">
                <Room
                    title="Camera King Superioara"
                    description={
                        <div>
                            <p>Dimensiune: 12 m²</p>
                            <p>Paturi confortabile: scor 9.1 - 16 evaluari (Booking)</p>
                        </div>
                    }
                    images={carousel}
                    tags={tags.king}
                />
                <Room
                    title="Camera Twin Deluxe"
                    description={
                        <div>
                            <p>Dimensiune: 12 m²</p>
                            <p>Paturi confortabile: scor 9.1 - 16 evaluari (Booking)</p>
                        </div>
                    }
                    images={carousel}
                    tags={tags.twin}
                />
            </div>
        </div>
    );
};

export default RoomsContent;
