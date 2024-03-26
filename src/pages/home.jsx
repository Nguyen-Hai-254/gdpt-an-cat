import React, { useState, useEffect } from "react";
import { Reference } from "../components/Reference";
import { About } from "../components/about";
import { Gallery } from "../components/gallery";
import { HomeNganhThieu } from "../components/HomeNganhThieu";
import { HomeNganhDong } from "../components/HomeNganhDong";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div style={{ marginBottom: "-40px" }}>
            <Reference />
            <About data={landingPageData.About} />
            <Gallery data={landingPageData.Gallery} />
            <HomeNganhDong />
            <HomeNganhThieu />
        </div>
    );
};

export default App