import React from "react";
import "./Css.css";

import video from "../video/vid.mp4"

const Css = () => {
return (
    <main>
        <h1>Фишечка для Css</h1>
        <div className="video-container">
            <video src={video} controls></video>
        </div>
    </main>
);
};

export default Css;