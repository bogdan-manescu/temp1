import { useEffect, useState } from "react";

const windowInnerDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};

export const GetWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(windowInnerDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(windowInnerDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};
