import React, { useState, Component, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import WaveSurfer from "wavesurfer.js";
import "./audio-list.css";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import axios from "axios";

function LessonAudio() {
  return (
    <>
      <LessonListSection />
    </>
  );
}

function LessonListSection() {
  return (
    <section className="lessonList-section">
      <div className="container">
        <LessonItem />
      </div>
    </section>
  );
}

export class WaveformComponent extends Component {
  state = {
    playing: false,
    loaded: false,
    currentTime: 0,
    duration: 0,
  };

  componentDidMount() {
    this.waveform = WaveSurfer.create({
      barWidth: 3,
      barRadius: 3,
      barGap: 2,
      barMinHeight: 1,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 80,
      progressColor: "#0075ff",
      responsive: true,
      waveColor: "#C4C4C4",
      cursorColor: "transparent",
      rtl: true,
    });

    const url = this.props.audio;

    this.waveform.load(url);

    this.waveform.on("ready", () => {
      this.setState({
        loaded: true,
        duration: this.waveform.getDuration(),
      });
    });

    this.waveform.on("audioprocess", () => {
      this.setState({
        currentTime: this.waveform.getCurrentTime(),
      });
    });
  }

  componentWillUnmount() {
    if (this.waveform) {
      this.waveform.destroy();
    }
  }

  handlePlayPause = () => {
    if (this.state.loaded) {
      this.setState({ playing: !this.state.playing }, () => {
        this.waveform.playPause();
      });
    }
  };

  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  render() {
    const { currentTime, duration } = this.state;
    const { onTimeUpdate } = this.props;

    if (onTimeUpdate) {
      onTimeUpdate({
        currentTime: this.formatTime(currentTime),
        duration: this.formatTime(duration),
      });
    }

    return <div id="waveform"></div>;
  }
}

export function LessonItem() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const waveformRef = React.createRef();
  const [audioInfo, setAudioInfo] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const { id } = useParams();
  const [shareIcon, setShareIcon] = useState("uil-share-alt");

  const handlePlayPause = () => {
    setPlaying(!playing);
    if (waveformRef.current) {
      waveformRef.current.handlePlayPause();
    }
  };

  const handleTimeUpdate = ({ currentTime, duration }) => {
    setCurrentTime(currentTime);
    setDuration(duration);
  };

  const handleShare = () => {
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl).then(() => {
      setShareIcon("uil uil-check");
      setTimeout(() => {
        setShareIcon("uil uil-share-alt");
      }, 2000);
    });
  };

  useEffect(() => {
    const fetchSingleAudio = async () => {
      try {
        const response = await axios.get(`/audios/${id}`);
        console.log(response?.data);
        setAudioInfo(response?.data);
        setAudioUrl(response?.data.audio);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleAudio();
  }, [id]);

  const formattedDate = audioInfo
    ? format(new Date(audioInfo.createdAt), "yyyy/M/d", { locale: ar })
    : "";

  return (
    <>
      <div className="audio-box">
        <div className="audio-img">
          <img src="https://i.ibb.co/Xt3wBMv/Parallax.png" alt="" />
        </div>
        <div className="audio-details">
          <div className="information">
            <div>
              <h2>{audioInfo?.title}</h2>
              <p className="time">
                <span className="current">{currentTime}</span>/
                <span className="duration">{duration}</span>
              </p>
            </div>
            <i
              className={`uil ${playing ? "uil-pause" : "uil-play"}`}
              onClick={handlePlayPause}
            ></i>
          </div>
          {audioInfo && (
            <WaveformComponent
              audio={audioUrl}
              ref={waveformRef}
              onTimeUpdate={handleTimeUpdate}
              audioUrl={audioInfo.audioUrl}
            />
          )}
        </div>
      </div>
      <div className="audio-information">
        <h1>معلومات التسجيل</h1>
        <div className="rows">
          <div className="row">
            <h2>اسم التسجيل</h2>
            <p>{audioInfo?.title}</p>
          </div>
          <div className="row">
            <h2>مدة التسجيل</h2>
            <p>{duration}</p>
          </div>
          <div className="row">
            <h2>تاريخ النشر</h2>
            <p>
              {audioInfo
                ? format(new Date(audioInfo.createdAt), "yyyy/M/d", {
                    locale: ar,
                  })
                : ""}
            </p>
          </div>
          <div className="row">
            <h2>اخر تحديث</h2>
            <p>
              {audioInfo
                ? format(new Date(audioInfo.updatedAt), "yyyy/M/d", {
                    locale: ar,
                  })
                : ""}
            </p>
          </div>
          <div className="row">
            <h2>تحميل التسجيل</h2>
            <a href={audioUrl} download>
              <button>تحميل</button>
            </a>
          </div>
          <div className="row">
            <h2>مشاركة التسجيل</h2>
            <i className={`uil ${shareIcon}`} onClick={handleShare}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default LessonAudio;
