import { LessonItem } from "../audioList/lessonAudio";
import "./lessonVideo.css";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { clientUrl } from "../../config";

function LessonVideo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <LessonVideoDetails />
    </>
  );
}

function LessonVideoDetails() {
  return (
    <section className="lesson-video">
      <div className="container">
        <VideoPlayer />
        <VideoItem />
      </div>
    </section>
  );
}

function PlayerIcons({ id }) {
  const [shared, setShared] = useState(false);

  const handleShareClick = async () => {
    const videoUrl = `${clientUrl}/video-list/${id}`;
    try {
      await navigator.clipboard.writeText(videoUrl);
      setShared(true);
      setTimeout(() => {
        setShared(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="icons">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        onClick={handleShareClick}
        style={{ cursor: "pointer" }}
      >
        {shared ? (
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"
            fill="#1C274C"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z"
            fill="#1C274C"
          />
        )}
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
          fill="#1C274C"
        />
        <path
          d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
          fill="#1C274C"
        />
      </svg>
      <Link to={`/video-list/${id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
            fill="#1C274C"
          />
        </svg>
      </Link>
    </div>
  );
}

function VideoItem() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("/videos");
        setVideos(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);
  const { id } = useParams();
  return (
    <div className="lesson-list">
      <h1>قائمه الدروس</h1>
      <ul>
        <ul>
          {videos.map((video) => (
            <li key={video._id}>
              <span>{video.title}</span>
              <PlayerIcons id={video._id} />
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

function VideoPlayer() {
  const [videoInfo, setVideoInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleVideo = async () => {
      try {
        const response = await axios.get(`/videos/${id}`);
        console.log(response?.data);
        setVideoInfo(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleVideo();
  }, [id]);

  const formattedDate = videoInfo
    ? format(new Date(videoInfo.createdAt), "yyyy/M/d", { locale: ar })
    : "";

  return (
    <div className="sidebar-video">
      <div className="video-player">
        <Player
          playsInline
          poster="https://aminelgazy.mathjewel.com/amin.png"
          src={videoInfo?.video}
        />
      </div>
      <div className="lesson-video-details">
        <h1>{videoInfo?.title}</h1>
        <ul>
          <li>
            <span>تصنيف الدرس</span>
            <span>{videoInfo?.type}</span>
          </li>
          <li>
            <span>تاريخ النشر</span>
            <span>{formattedDate}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LessonVideo;
