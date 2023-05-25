import React, { useState } from "react";
import Cart from "../../component/Cart/Cart";
import myimg from "../../assets/images/1.png";
import avatar from "../../assets/images/avt.jpg";
import videcard from "../../assets/images/2.jpg";
import { CiMenuKebab } from "react-icons/ci";
import Shorts from "../../component/Shorts/Shorts";


export const cartItems = [
  {
    id: 1,
    name: "IIFE trong Javascript là gì? Hiểu IIFE cùng F8 nha!",
    lastname: "ihwihdfowfhw",
    avatar: avatar,
    link: "/video/1",
    img: myimg,
    icon: <CiMenuKebab className="ic" />,
  },
  {
    id: 2,
    name: "[Review] 1001 Nước giải khát KỲ LẠ ở SIÊU THỊ | Mía tắc, sả chanh, bia không cồn, sương sáo..v..v",
    lastname: "ihwihdfowfhw",
    avatar: avatar,
    img: videcard,
    link: "/video/2",
    icon: <CiMenuKebab className="ic" />,
  },
  {
    id: 3,
    name: "(Phần 1) Bản chất của tiền | Chữa lành mối quan hệ với tiền | [ Samyhealing.vn ]",
    lastname: "ihwihdfowfhw",
    avatar: avatar,
    img: myimg,
    link: "/video/3",
    icon: <CiMenuKebab className="ic" />,
  },

  {
    id: 4,
    name: "Thám Tử Lừng Danh Conan ",
    lastname: "ihwihdfowfhw",
    avatar: avatar,
    img: videcard,
    link: "/video/4",
    icon: <CiMenuKebab className="ic" />,
  },
  {
    name: "Promise chain",
    lastname: "ihwihdfowfhw",
    avatar: avatar,
    img: videcard,
    link: "/video",
    icon: <CiMenuKebab className="ic" />,
  },
  {
    name: "Reactjs 2022",
    lastname: "ihwihdfowfhw",
    avatar: avatar,
    img: myimg,
    link: "/video/5",
    icon: <CiMenuKebab className="ic" />,
  },
  {
    name: "Neu luc do",
    lastname: "ihwihdfowfhw",
    avatar: avatar,
    img: videcard,
    link: "/video/6",
    icon: <CiMenuKebab className="ic" />,
  },
  {
    name: "cuoc song cua co gai doc than",
    lastname: "ihwihdfowfhw",
    avatar: avatar,
    img: myimg,
    link: "/video/7",
    icon: <CiMenuKebab className="ic" />,
  },
];

const Home = () => {
  return (
    <div style={{ marginTop: "150px", marginLeft: "20px"}}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "20px",
        }}
      >
        {cartItems.map((cart) => (
          <Cart
            image={cart.img}
            avatar={cart.avatar}
            name={cart.name}
            icon={cart.icon}
            lastname={cart.lastname}
            link={cart.link}
          />
        ))}
      </div>
      <hr />
      <Shorts />
      <hr />
    </div>
  );
};

export default Home;
