import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ icon, name, className, link }) => {
  return (
    <Link to={link}>
      <div className={`button ${className}`}>
        <span className="button-icon">{icon}</span>
        <p className="button-name">{name}</p>
      </div>
    </Link>
  );
};

export default Button;
