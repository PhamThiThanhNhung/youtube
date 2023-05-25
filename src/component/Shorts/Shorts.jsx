import React from "react";
import "./Shorts.css";
import imgshort from "../../assets/images/5.jpg";
import Short from "../Short/Short";

const ShortsItems = [
  {
    name: "dbisefhroghwsfoweegfosbjgjkuyuyjtyttyityi",
    lastname: "oeuqrj3r4io",
    img: imgshort,
  },
  {
    name: "dbisefhroghwsfoweegfosb",
    lastname: "oeuqrj3r4io",
    img: imgshort,
  },
  {
    name: "dbisefhroghwsfoweegfosb",
    lastname: "oeuqrj3r4io",
    img: imgshort,
  },
  {
    name: "dbisefhroghwsfoweegfosb",
    lastname: "oeuqrj3r4io",
    img: imgshort,
  },
  {
    name: "dbisefhroghwsfoweegfosb",
    lastname: "oeuqrj3r4io",
    img: imgshort,
  },
];

const Shorts = () => {
  return (
    <div className="short-items">
      <h1 >Shorts</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {ShortsItems.map((short, index) => (
          <Short
            key={index}
            img={short.img}
            title={short.name}
            description={short.lastname}
          />
        ))}
      </div>
    </div>
  );
};

export default Shorts;
