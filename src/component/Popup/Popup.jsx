import React, { useRef } from "react";
import "./Popup.css";
import { TbShare3 } from "react-icons/tb";
import Button from "../Button/Button";
import { useClickOutside } from "../../hook/useClickOutside";

const PopupItems = [
  {
    icon: <TbShare3 />,
    name: "Thêm vào danh sách chờ",
  },
  {
    icon: <TbShare3 />,
    name: "Lưu vào danh sách xem sau",
  },
  {
    icon: <TbShare3 />,
    name: "Lưu vào danh sách phát",
  },
  {
    icon: <TbShare3 />,
    name: "Chia sẻ",
  },
  {
    icon: <TbShare3 />,
    name: "Không quan tâm",
  },
  {
    icon: <TbShare3 />,
    name: "Không quan tâm kênh này",
  },
  {
    icon: <TbShare3 />,
    name: "Báo vi phạm",
  },
];

const Popup = ({ closeShowPopup }) => {
  const ref = useRef(null);
  useClickOutside(ref, closeShowPopup);
  return (
    <div className="popup" ref={ref}>
      {PopupItems.map((index) => {
        return <Button icon={index.icon} name={index.name} />;
      })}
    </div>
  );
};

export default Popup;
