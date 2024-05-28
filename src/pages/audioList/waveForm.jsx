import React, { Component } from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveformContainer, Wave, PlayButton } from "./Waveform.styled";

class Waveform extends Component {
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

    const url =
      "https://res.cloudinary.com/ddpcufge5/video/upload/v1716625098/audio_bukstb.aac";

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

    return (
      <WaveformContainer>
        <Wave id="waveform" />
      </WaveformContainer>
    );
  }
}

// export default Waveform;
