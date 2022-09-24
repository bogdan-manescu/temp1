import React from "react";
import { Link } from "react-router-dom";
import images from "../images";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import "../styles/homecontent.css";

const HomeContentItem = ({
    title,
    subtitle,
    description,
    images,
    cta,
    link,
    reverse = false,
    anchor = false,
}) =>
    reverse ? (
        <div className="home-container-item" style={{ paddingRight: "30px", paddingLeft: "0" }}>
            <div className="home-container-item-images-wrapper">
                <div
                    className="home-container-item-images"
                    style={{ padding: "30px 0 60px 30px" }}
                    data-aos="fade-right"
                    data-aos-duration={700}
                >
                    {images.map((el, idx) => (
                        <img
                            key={idx}
                            src={el.image}
                            alt={el.alt}
                            data-aos="fade-right"
                            data-aos-duration={idx * 200 + 700}
                        />
                    ))}
                </div>
            </div>
            <div className="home-container-item-text-wrapper">
                <div
                    className="home-container-item-text"
                    style={{ marginRight: "auto ", marginLeft: "0" }}
                >
                    <p
                        className="home-container-item-text-subtitle"
                        data-aos="fade-left"
                        data-aos-duration="700"
                    >
                        {subtitle}
                    </p>
                    <h1
                        className="home-container-item-text-title"
                        data-aos="fade-left"
                        data-aos-duration="900"
                    >
                        {title}
                    </h1>
                    <p
                        className="home-container-item-text-description"
                        data-aos="fade-left"
                        data-aos-duration="1100"
                    >
                        {description}
                    </p>
                    <div data-aos="fade-left" data-aos-duration="1300">
                        {anchor ? (
                            <a href={`${link}`}>
                                <button className="content-cta">{cta}</button>
                            </a>
                        ) : (
                            <Link to={`${link}`}>
                                <button className="content-cta">{cta}</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="home-container-item">
            <div className="home-container-item-text-wrapper">
                <div className="home-container-item-text">
                    <p
                        className="home-container-item-text-subtitle"
                        data-aos="fade-right"
                        data-aos-duration="700"
                    >
                        {subtitle}
                    </p>
                    <h1
                        className="home-container-item-text-title"
                        data-aos="fade-right"
                        data-aos-duration="900"
                    >
                        {title}
                    </h1>
                    <p
                        className="home-container-item-text-description"
                        data-aos="fade-right"
                        data-aos-duration="1100"
                    >
                        {description}
                    </p>
                    <div data-aos="fade-right" data-aos-duration="1300">
                        {anchor ? (
                            <a href={`${link}`}>
                                <button className="content-cta">{cta}</button>
                            </a>
                        ) : (
                            <Link to={`${link}`}>
                                <button className="content-cta">{cta}</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="home-container-item-images-wrapper">
                <div
                    className="home-container-item-images"
                    data-aos="fade-left"
                    data-aos-duration={700}
                >
                    {images.map((el, idx) => (
                        <img
                            key={idx}
                            src={el.image}
                            alt={el.alt}
                            data-aos="fade-left"
                            data-aos-duration={idx * 200 + 700}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

const HomeContent = () => {
    let item = images.home;

    const tags = [
        { icon: <AccountBalanceWalletOutlinedIcon />, label: "Preturi imbatabile" },
        { icon: <GppGoodOutlinedIcon />, label: "Rezervarea este securizata" },
        { icon: <FileOpenOutlinedIcon />, label: "Administreaza-ti rezervarea online" },
        { icon: <ChatOutlinedIcon />, label: "Personalul vorbeste romana" },
        { icon: <PeopleAltOutlinedIcon />, label: "Cea mai apreciata de cupluri" },
        { icon: <ConfirmationNumberOutlinedIcon />, label: "Acceptam vouchere de vacanta" },
    ];

    const other = [
        {
            title: "Dotari bucatarie privata",
            content: [
                "Frigider",
                "Cuptor cu microunde",
                "Masina de cafea",
                "Cana fierbator",
                "Plita de gatit",
                "Ustensile de bucatarie",
                "Prajitor de paine",
                "Masa",
                "Cuptor",
                "Masina de spalat",
                "Uscator de haine",
            ],
        },
        {
            title: "Dotari baie privata",
            content: [
                "Cada",
                "Papuci de casa",
                "Articole de toaleta gratuite",
                "Cada spa",
                "Dus",
                "Uscator de par",
                "Halat de baie",
                "Hartie igienica",
                "Prosoape",
            ],
        },
        {
            title: "Vedere",
            content: ["Vedere la gradina", "Vedere la piscina"],
        },
        {
            title: "Altele",
            content: [
                "Etaje superioare accesibile pe scari",
                "Lenjerie de pat",
                "Paturi extra lungi",
                "Dressing",
                "Ceas desteptator",
                "Garderoba sau dulap",
                "Porti de siguranta pentru copii",
                "Zona de relaxare",
                "Zona de luat masa",
                "TV cu ecran plat",
                "Aer conditionat",
                "Plasa de tantari",
                "Fier de calcat",
                "Balcon",
                "Incalzire",
                "Terasa",
                "Ventilator",
                "Mobilier de gradina",
                "Mocheta",
                "Zona de luat masa in aer liber",
                "Piscina privata",
                "Gratar",
                "Priza langa pat",
                "Suport de haine",
            ],
        },
    ];

    return (
        <div className="home">
            <div className="home-container">
                {
                    <HomeContentItem
                        title={item[0].title}
                        subtitle={item[0].subtitle}
                        description={item[0].description}
                        images={item[0].media}
                        cta={item[0].cta}
                        link={item[0].link}
                        anchor={true}
                    />
                }
                <HomeContentItem
                    title={item[1].title}
                    subtitle={item[1].subtitle}
                    description={item[1].description}
                    images={item[1].media}
                    cta={item[1].cta}
                    link={item[1].link}
                    reverse={true}
                    anchor={true}
                />
                <HomeContentItem
                    title={item[2].title}
                    subtitle={item[2].subtitle}
                    description={item[2].description}
                    images={item[2].media}
                    cta={item[2].cta}
                    link={item[2].link}
                    anchor={true}
                />
                <div className="home-container-facilities">
                    <div className="home-container-facilities-tags" data-aos="fade-up">
                        {tags.map((tag, idx) => (
                            <div key={idx} className="facilities-tag">
                                {tag.icon}
                                <span>{tag.label}</span>
                            </div>
                        ))}
                    </div>
                    <h1 className="home-container-facilities-title" data-aos="fade-left">
                        Alte dotari
                    </h1>
                    <div
                        className="footer-menu-line"
                        style={{ backgroundColor: "black" }}
                        data-aos="fade-left"
                        data-aos-duration={1400}
                    />
                    {other.map((tag, idx) => (
                        <div key={idx} className="home-container-facilities-other">
                            <h2 className="facilities-other-subtitle" data-aos="fade-left">
                                {tag.title}
                            </h2>
                            <div className="rooms-description-tags">
                                {tag.content.map((label, idx) => (
                                    <div
                                        key={idx}
                                        className="rooms-description-tag"
                                        data-aos="fade-left"
                                        data-aos-duration={700 + idx * 50}
                                    >
                                        <CheckOutlinedIcon />
                                        <span>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
