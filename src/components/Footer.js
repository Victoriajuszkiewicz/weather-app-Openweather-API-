import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../img/logo3.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div classname="footerparent">
      <footer className="footer mt-auto py-3  sticky-bottom">
        <div clssName="container">
          <NavLink to="/">
            <i className="bi bi-arrow-left-circle-fill"></i>
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
