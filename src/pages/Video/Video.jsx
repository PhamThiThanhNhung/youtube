import React, { useState } from "react";
import "./Video.css";
import anh from "../../assets/images/4.jpg";
import imgacount from "../../assets/images/5.jpg";
import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { nextVideoDatas } from "../../util";
import NextVideo from "../../component/NextVideo/NextVideo";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const [videoDetail, setVideoDetail] = useState({});
  const [videosRemaining, setVideosRemaining] = useState([]);
  const navigate = useNavigate();
  const handleWatchVideo = (id) => {
    const videoMustFind = nextVideoDatas.find((video) => video.id === id);
    setVideoDetail(videoMustFind);

    const videoText = nextVideoDatas.filter((video) => video.id !== id);
    setVideosRemaining(videoText);
    navigate(`/video/${id}`);
  };

  console.log(videoDetail);

  return (
    <div className="video-page">
      <div className="video">
        <div>
          <img className="img" src={videoDetail.image} alt="" />
          <p className="info-video">{videoDetail.namevideo}</p>
        </div>

        <div className="account">
          <div className="information">
            <img className="avt-account" src={imgacount} alt="" />
            <p className="info-video">F8 Official</p>
            <button className="button-items">
              <IoIosNotificationsOutline />
              <p>Da dang ky</p>
              <IoIosArrowDown />
            </button>
          </div>

          <div className="information1">
            <button className="button-items">
              <AiOutlineLike />
              <p>1.1N</p>
              <AiOutlineDislike />
            </button>

            <button className="button-items">
              <TbShare3 />
              <p>Chia Se</p>
            </button>

            <button className="button-items2">
              <BiDotsHorizontalRounded />
            </button>
          </div>
        </div>
        <button className="button-info">
          Styling responsive navigation menus for end users is hardly ever an
          easy process.
          <br /> Frontend developers have to consider certain parameters like
          device breakpoints and accessibility to create a pleasant navigation
          experience. It can get more challenging in frontend frameworks like
          React.
        </button>
      </div>

      <div>
        <div className="video-card">
          <button className="item1">Tat ca</button>
          <button className="item1">Trong loat video</button>
          <button className="item1">Cua F8 Official</button>
        </div>
        <div>
          {videosRemaining.length !== 0
            ? videosRemaining.map((video, index) => (
                <NextVideo
                  key={index}
                  click={() => handleWatchVideo(video.id)}
                  image={video.image}
                  namevideo={video.namevideo}
                  offcial={video.offcial}
                  views={video.views}
                  timeupload={video.timeupload}
                />
              ))
            : nextVideoDatas.map((video, index) => (
                <NextVideo
                  key={index}
                  click={() => handleWatchVideo(video.id)}
                  image={video.image}
                  namevideo={video.namevideo}
                  offcial={video.offcial}
                  views={video.views}
                  timeupload={video.timeupload}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
