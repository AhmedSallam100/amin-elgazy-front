import { useNavigate } from "react-router-dom";
import { Button } from "../home/home";
import "./showExam.css";
import { useEffect } from "react";

function ShowExam() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <StudentLibrary>
        <div className="myExam-List">
          <div className="exam">
            <h1>الاختبار الاول</h1>
            <Button text="عرض" path="/exam" className="general-btn" />
          </div>
          <div className="exam">
            <h1>الاختبار التاني</h1>
            <Button text="عرض" path="/exam" className="general-btn" />
          </div>
          <div className="exam">
            <h1>الاختبار التالت</h1>
            <Button text="عرض" path="/exam" className="general-btn" />
          </div>
          <div className="exam">
            <h1>الاختبار الرابع</h1>
            <Button text="عرض" path="/exam" className="general-btn" />
          </div>
        </div>
      </StudentLibrary>
    </>
  );
}

export function StudentLibrary({ children }) {
  return (
    <section className="student-library">
      <div className="container">{children}</div>
    </section>
  );
}
export default ShowExam;
