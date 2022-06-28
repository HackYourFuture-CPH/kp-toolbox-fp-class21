import React from "react";
import "./MainLogo.style.css";
import { Link } from "react-router-dom";

export const MainLogo = () => {
  return (
    <section>
      <Link to="/">
        <p className="logo-text">KAOSPILOT</p>
      </Link>
    </section>
  );
};