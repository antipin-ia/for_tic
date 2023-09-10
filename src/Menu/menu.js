import React, { useRef } from "react";
import "./menu.css";
import useClickOutside from "../Hooks/useClickOutside";
import { Link } from "react-router-dom";

const Menu = ({ header, items, active, setActive, burgerBtnRef }) => {
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setActive(false), burgerBtnRef);
  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="blur" />
      <div className="menu__content" ref={menuRef}>
        <div className="menu__header">{header}</div>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.href} onClick={() => setActive(false)}>
                  {item.value}
                </Link>
                <span className="icon-wrapper">
                  <i className={item.icon}></i>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
