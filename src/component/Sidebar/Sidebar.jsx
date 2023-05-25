import React from "react";
import { AiOutlineHome, AiOutlineLike } from "react-icons/ai";
import { CgShortcut, CgYoutube } from "react-icons/cg";
import Button from "../Button/Button";
import "./sidebar.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link, useParams, useRoutes, useSearchParams } from "react-router-dom";

const sidebarItems = [
  {
    icon: <AiOutlineHome />,
    name: "Trang chủ",
    link: "/",
  },
  {
    icon: <CgShortcut />,
    name: "Shorts",
    link: "/shorts",
  },
  {
    icon: <CgYoutube />,
    name: "Kênh đăng ký",
    link: "/feed/subscriptions",
  },
];
const barwrapp = [
  {
    icon: <AiOutlineHome />,
    name: "Thư viện",
  },
  {
    icon: <CgShortcut />,
    name: "Video đã xem",
  },
  {
    icon: <MdOutlineWatchLater />,
    name: "Xem sau",
  },
  {
    icon: <AiOutlineLike />,
    name: "Video đã thích",
  },
];
const sidebarwrapp = [
  {
    icon: <AiOutlineHome />,
    name: "F8 Official",
  },
  {
    icon: <CgShortcut />,
    name: "TechMaster Viet Nam",
  },
  {
    icon: <MdOutlineWatchLater />,
    name: "evondev",
  },
  {
    icon: <AiOutlineLike />,
    name: "Retro Video",
  },
  {
    icon: <AiOutlineLike />,
    name: "Xem qua các kênh",
  },
];
const sidebartext = [
  {
    icon: <AiOutlineHome />,
    name: "F8 Official",
  },
  {
    icon: <CgShortcut />,
    name: "TechMaster Viet Nam",
  },
  {
    icon: <MdOutlineWatchLater />,
    name: "evondev",
  },
  {
    icon: <AiOutlineLike />,
    name: "Retro Video",
  },
  {
    icon: <AiOutlineLike />,
    name: "Xem qua các kênh",
  },
];
const SideBar = () => {
  return (
    <div className="sidebarwrapper">
      <div className="navbar ">
        {sidebarItems.map((item, i) => {
          return <Button icon={item.icon} name={item.name} link={item.link} />;
        })}
      </div>
      <hr />
      <div className="navbar">
        {barwrapp.map((item, i) => {
          return <Button icon={item.icon} name={item.name} link={item.link} />;
        })}
      </div>
      <hr/>
      <div className="navbar">
        {sidebarwrapp.map((item, i) => {
          return <Button icon={item.icon} name={item.name} link={item.link} />;
        })}
      </div>
      <hr/>
      <div className="navbar">
        {sidebartext.map((item, i) => {
          return <Button icon={item.icon} name={item.name} link={item.link} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
