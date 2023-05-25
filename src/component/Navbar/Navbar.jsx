import React from "react";
import "./Navbar.css";
import { BsMic } from "react-icons/bs";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { GrNotification } from "react-icons/gr";
import { RiAccountPinCircleLine } from "react-icons/ri";
import ListOption from "../../component/ListOption/ListOption";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import youtube from "../../assets/images/youtube.png";

const Navbar = ({ icons }) => {
  return (
    <div className="navbarwrapper">
      <div className="header">
        <div className="icon-menu">
          <GiHamburgerMenu />
          <img className="logo" src={youtube} alt="" />
        </div>
        <div className="search-item">
          <div className="action-search">
            <input
              className="search"
              type="text"
              placeholder="  Tìm kiếm"
            />
            <BiSearch className="icon-search" />
          </div>

          <BsMic />
        </div>
        <div className="icon">
          <MdOutlineCreateNewFolder className="navbar-icon" />
          <GrNotification className="navbar-icon" />
          <RiAccountPinCircleLine className="navbar-icon" />
        </div>
      </div>
      <ListOption />
    </div>
  );
};

export default Navbar;
