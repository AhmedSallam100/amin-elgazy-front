import { Link } from "react-router-dom";
import "./dashboard.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";
import { Button } from "../home/home";

const ShowAllData = () => {
  return (
    <div className="add-exam">
      <div className="container">
        <Sidebar />
        <div className="add-content">
          <h1 className="data-h1">جميع البيانات</h1>
          <div className="all-data-container">
            <div className="all-data-item">
              <div className="item-text">
                <i className="uil uil-clipboard-alt"></i>
                <h2>الامتحانات</h2>
              </div>
              <Link to={"/school-exams"}>تصفح</Link>
            </div>
            <hr />
            <div className="all-data-item">
              <div className="item-text">
                <i className="uil uil-clipboard-alt"></i>
                <h2>الشيتات</h2>
              </div>
              <Link to={"/school-sheets"}>تصفح</Link>
            </div>
            <hr />
            <div className="all-data-item">
              <div className="item-text">
                <i className="uil uil-clipboard"></i>
                <h2>السبورات</h2>
              </div>
              <Link to={"/school-boards"}>تصفح</Link>
            </div>
            <hr />
            <div className="all-data-item">
              <div className="item-text">
                <i className="uil uil-video"></i>
                <h2>الفيديوهات</h2>
              </div>
              <Link to={"/school-videos"}>تصفح</Link>
            </div>
            <hr />
            <div className="all-data-item">
              <div className="item-text">
                <i className="uil uil-record-audio"></i>
                <h2>التسجيلات</h2>
              </div>
              <Link to={"/school-audios"}>تصفح</Link>
            </div>
            <hr />
            <div className="all-data-item">
              <div className="item-text">
                <i className="uil uil-books"></i>
                <h2>المذكرات</h2>
              </div>
              <Link to={"/school-books"}>تصفح</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllData;
