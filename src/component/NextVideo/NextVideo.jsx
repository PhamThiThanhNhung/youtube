import React from "react";
import "./NextVideo.css";




const NextVideo = ({
  image,
  namevideo,
  offcial,
  views,
  timeupload,
  click,
}) => {
  return (
    <div className="card-videopage" onClick={click}>
      <img
        className="imgvideo"
        style={{ cursor: "pointer" }}
        src={image}
        alt=""
      />

      <div className="info">
        <div className="text-info">
          <p>{namevideo}</p>
          <p>{offcial}</p>
        </div>
        <div>
          <p>{views} luot xem</p>
          <p>{timeupload} nam truoc</p>
        </div>
      </div>
    </div>
  );
};

export default NextVideo;
