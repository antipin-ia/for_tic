import React from "react";
import "./Me.css";

import MeImage from "../image/Me.png";
import Me2Image from "../image/Me2.png";

const Me = () => {
  return (
    <main>
      <h1>Прекрасный я</h1>
      <div className="image-container">
        <figure>
          <div className="image-wrapper">
            <img src={MeImage} alt="Школьное фото" />
          </div>
          <figcaption>Школьное фото</figcaption>
        </figure>
        <figure>
          <div className="image-wrapper">
            <img src={Me2Image} alt="описание второго изображения" />
          </div>
          <figcaption>Улучшеная версия</figcaption>
        </figure>
      </div>
    </main>
  );
};

export default Me;
