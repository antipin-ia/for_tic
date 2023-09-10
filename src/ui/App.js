import React, { useState, useRef } from "react";
import "./App.css";
import Menu from "../Menu/menu";
import { BrowserRouter as Router, Route, Routes ,Navigate  } from "react-router-dom";


import background from "../image/bg.jpg";
import Me from "../Pages/me";
import Why from "../Pages/why";
import Git from "../Pages/git";
import Css from "../Pages/css";

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const burgerBtnRef = useRef(null);
  const items = [
    { value: "Прекрасный я", href: "/me", icon: "bi bi-emoji-heart-eyes" },
    { value: "Почему я фронт?", href: "/why", icon: "bi bi-front" },
    { value: "git", href: "/git", icon: "bi bi-git" },
    { value: "Крутейший CSS", href: "/Css", icon: "bi bi-filetype-css" },
  ];    

 

  return (
    <Router>
      <div className="main" style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <nav>
          <div
            className="burger-btn"
            ref={burgerBtnRef}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span />
          </div>
        </nav>
        <Routes>
            <Route path="/" element={<Navigate to="/me" />} />
            <Route path="/me" element={<Me />} />
            <Route path="/why" element={<Why />} />
            <Route path="/git" element={<Git />} />
            <Route path="/Css" element={<Css />} />
        </Routes>
        <Menu
          active={menuActive}
          setActive={setMenuActive}
          header="Yandex"
          items={items}
          burgerBtnRef={burgerBtnRef}
        />
      </div>
    </Router>
  );
};

export default App;
