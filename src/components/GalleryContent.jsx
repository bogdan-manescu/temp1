import React from "react";
import { grid } from "../images";
import "../styles/gallery.css";

const GalleryContent = () => {
    return (
        <div className="gallery" id="gallery">
            <div className="gallery-container">
                {grid.map((item, idx) => (
                    <div key={idx} className="gallery-container-item" data-aos="fade-up">
                        <img src={item.image} alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryContent;
