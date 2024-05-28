import { useState } from "react";
import "./blackboards.css";

function MaterialPhoto({ path, text, date }) {
  const [resize, setReSize] = useState(false);

  function handleResize() {
    setReSize(!resize);
  }

  function openImg() {
    window.open(path);
  }

  return (
    <section className="student-resourses">
      <div className="container">
        <div className="material-photo" onClick={handleResize}>
          <div className="photo-header">
            <h1 className="photo-title">{text}</h1>
            <h1 className="photo-date">{date}</h1>
          </div>
          <img
            src={path}
            alt="سبورة"
            className={resize ? "clicked" : ""}
            onClick={openImg}
          />
        </div>
      </div>
    </section>
  );
}

export default MaterialPhoto;
