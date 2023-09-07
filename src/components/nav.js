import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  useEffect(() => {
    let nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        nav.classList.add("bac");
      } else {
        nav.classList.remove("bac");
      }
    });
  });
  return (
    <nav>
      <div className="logo">
        <img src={require("../media/logo.png")} alt="" />
      </div>
      <div className="links">
        <ul className="main">
          <li className="active">
            <NavLink to={"/"}>Browse</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Log in</NavLink>
          </li>
          <li className="su">
            <NavLink to={"/"}>Sign up</NavLink>
          </li>
        </ul>
        <button className="menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
