import React from "react";
import { Helmet } from "react-helmet";

const HelmetWrapper = ({ title, description, image, url }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default HelmetWrapper;
