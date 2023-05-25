import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import { CiMenuKebab } from "react-icons/ci";
import Popup from "../Popup/Popup";
import { Link } from "react-router-dom";

const Cart = ({ image, avatar, name, icon, lastname, link }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = (e) => {
    e.preventDefault();
    console.log("aaaaaa");
    setShowPopup((prevState) => !prevState);
  };

  const closeShowPopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="card" >
      <Link to={link}>
        <img className="card-image" src={image} />
      </Link>

      <div className="card-info">
        <div className="card-info__left">
          <img className="avatar" src={avatar} />
          <p className="name">{name}</p>
        </div>

        <CiMenuKebab
          ref={useRef}
          style={{ cursor: "pointer" }}
          onClick={handleOpenPopup}
        />

        {showPopup && <Popup closeShowPopup={closeShowPopup} />}
      </div>
      <p className="card-description">{lastname}</p>
    </div>
  );
};

export default Cart;
