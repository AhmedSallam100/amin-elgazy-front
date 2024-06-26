import "./courses.css";
import { MainTitle } from "../home/home";
import { Button } from "../home/home";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <CoursesList />
    </>
  );
}
function CourseInfo({ children }) {
  return <div className="course-info">{children}</div>;
}
function CoursesList() {
  return (
    <section className="courses-section">
      <MainTitle>المجاميع</MainTitle>
      <div className="container">
        <div className="courses-list">
          <CourseInfo>
            {" "}
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V12C11.25 12.1989 11.329 12.3897 11.4697 12.5303L14.0947 15.1553C14.3876 15.4482 14.8624 15.4482 15.1553 15.1553C15.4482 14.8624 15.4482 14.3876 15.1553 14.0947L12.75 11.6893V6Z"
                    fill="#3A52EE"
                  />
                </svg>
                <span>السبت والثلاثاء 1</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="-5.07 0 43.012 43.012"
                >
                  <path
                    id="location"
                    d="M406.185,260.012c-18.028-13.493-16.233-28.572-16.233-28.572h11.184a4.7,4.7,0,0,0-.142,1.1,5.378,5.378,0,0,0,.466,2.1,7.353,7.353,0,0,0,2.622,2.615,5,5,0,0,0,4.218,0,7.316,7.316,0,0,0,2.619-2.615,5.4,5.4,0,0,0,.465-2.105,4.728,4.728,0,0,0-.141-1.1h11.5S424.217,246.277,406.185,260.012Zm4.731-29.576a7.353,7.353,0,0,0-2.619-2.618,4.977,4.977,0,0,0-4.211,0,7.389,7.389,0,0,0-2.622,2.618,6.468,6.468,0,0,0-.326,1H389.966c0-7.972,7.335-14.435,16.383-14.435s16.383,6.463,16.383,14.435H411.242A6.523,6.523,0,0,0,410.915,230.436Z"
                    transform="translate(-389.902 -217)"
                    fill="#2d5be2"
                  />
                </svg>
                <span> سنتر الامين </span>
              </li>
            </ul>{" "}
            <Button className="general-btn" text="تاكيد" path="/booking" />
          </CourseInfo>
          <CourseInfo>
            {" "}
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0,0,300,150"
                  style={{ fill: "#0075ff" }}
                >
                  <g
                    fill="#0075ff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ "mix-blend-mode ": " normal" }}
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.523 4.477,10 10,10c5.523,0 10,-4.477 10,-10c0,-5.523 -4.477,-10 -10,-10zM14.586,16l-3.293,-3.293c-0.188,-0.188 -0.293,-0.442 -0.293,-0.707v-5c0,-0.552 0.448,-1 1,-1v0c0.552,0 1,0.448 1,1v4.586l3,3c0.39,0.39 0.39,1.024 0,1.414v0c-0.39,0.39 -1.024,0.39 -1.414,0z"></path>
                    </g>
                  </g>
                </svg>{" "}
                <span> الاحد والاربع 3</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="-5.07 0 43.012 43.012"
                >
                  <path
                    id="location"
                    d="M406.185,260.012c-18.028-13.493-16.233-28.572-16.233-28.572h11.184a4.7,4.7,0,0,0-.142,1.1,5.378,5.378,0,0,0,.466,2.1,7.353,7.353,0,0,0,2.622,2.615,5,5,0,0,0,4.218,0,7.316,7.316,0,0,0,2.619-2.615,5.4,5.4,0,0,0,.465-2.105,4.728,4.728,0,0,0-.141-1.1h11.5S424.217,246.277,406.185,260.012Zm4.731-29.576a7.353,7.353,0,0,0-2.619-2.618,4.977,4.977,0,0,0-4.211,0,7.389,7.389,0,0,0-2.622,2.618,6.468,6.468,0,0,0-.326,1H389.966c0-7.972,7.335-14.435,16.383-14.435s16.383,6.463,16.383,14.435H411.242A6.523,6.523,0,0,0,410.915,230.436Z"
                    transform="translate(-389.902 -217)"
                    fill="#2d5be2"
                  />
                </svg>
                <span> سنتر القمة</span>
              </li>
            </ul>{" "}
            <Button className="general-btn" text="تاكيد" path="/booking" />
          </CourseInfo>
          <CourseInfo>
            {" "}
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V12C11.25 12.1989 11.329 12.3897 11.4697 12.5303L14.0947 15.1553C14.3876 15.4482 14.8624 15.4482 15.1553 15.1553C15.4482 14.8624 15.4482 14.3876 15.1553 14.0947L12.75 11.6893V6Z"
                    fill="#3A52EE"
                  />
                </svg>
                <span> الاتنين والخميس 6:30</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="-5.07 0 43.012 43.012"
                >
                  <path
                    id="location"
                    d="M406.185,260.012c-18.028-13.493-16.233-28.572-16.233-28.572h11.184a4.7,4.7,0,0,0-.142,1.1,5.378,5.378,0,0,0,.466,2.1,7.353,7.353,0,0,0,2.622,2.615,5,5,0,0,0,4.218,0,7.316,7.316,0,0,0,2.619-2.615,5.4,5.4,0,0,0,.465-2.105,4.728,4.728,0,0,0-.141-1.1h11.5S424.217,246.277,406.185,260.012Zm4.731-29.576a7.353,7.353,0,0,0-2.619-2.618,4.977,4.977,0,0,0-4.211,0,7.389,7.389,0,0,0-2.622,2.618,6.468,6.468,0,0,0-.326,1H389.966c0-7.972,7.335-14.435,16.383-14.435s16.383,6.463,16.383,14.435H411.242A6.523,6.523,0,0,0,410.915,230.436Z"
                    transform="translate(-389.902 -217)"
                    fill="#2d5be2"
                  />
                </svg>
                <span> سنتر ابن سينا </span>
              </li>
            </ul>{" "}
            <Button className="general-btn" text="تاكيد" path="/booking" />
          </CourseInfo>
        </div>
      </div>
    </section>
  );
}
