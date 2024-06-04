import "./lessonAudio.css";
import Player from "../../StaticComponent/Player";
import Song from "../../StaticComponent/Song";
import Library from "../../StaticComponent/Library";
import styled from "styled-components";
import Nav from "../../StaticComponent/Nav";

import React, { useState, useRef, useEffect } from "react";
import data from "../../data/data";
import { useNavigate } from "react-router-dom";

export default function LessonPlayer() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <LessonAudio />
    </>
  );
}
function LessonAudio() {
  // Ref
  const audioRef = useRef(null);

  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // Functions
  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let nextSong = songs[(currentIndex + 1) % songs.length];
    await setCurrentSong(nextSong);

    const newSongs = songs.map((song) => {
      if (song.id === nextSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <section className="Lesson-Audio-section">
      <div className="container">
        <div className="Lesson-details">
          <AppContainer libraryStatus={libraryStatus}>
            <Nav
              libraryStatus={libraryStatus}
              setLibraryStatus={setLibraryStatus}
            />
            <Song currentSong={currentSong} />
            <Player
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              songInfo={songInfo}
              setSongInfo={setSongInfo}
              songs={songs}
              setSongs={setSongs}
            />
            <Library
              songs={songs}
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
              libraryStatus={libraryStatus}
            />

            <audio
              onLoadedMetadata={updateTimeHandler}
              onTimeUpdate={updateTimeHandler}
              onEnded={songEndHandler}
              ref={audioRef}
              src={currentSong.audio}
            />
          </AppContainer>
        </div>
      </div>
    </section>
  );
}

const AppContainer = styled.div`
  transition: all 0.5s ease;
  margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
