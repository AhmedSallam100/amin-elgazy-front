import { StudentLibrary } from "../showExams/showExam";
import { Button } from "../home/home";
import { useEffect, useState } from "react";
import axios from "axios";

function Exams() {
  const [exams, setExams] = useState([]);
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get("/exams");
        console.log(response.data);
        setExams(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExams();
  }, []);
  return (
    <>
      <StudentLibrary>
        <div className="mySheet-List">
          {exams.length === 0 && (
            <div className="no-exam-message">
              <i className="uil uil-exclamation-triangle"></i>
              <h1>لا يوجد امتحانات حتي الان</h1>
              <Button text="الصفحة الرئيسية" path={`/`} />
            </div>
          )}
          {exams.map((exam) => (
            <div className="sheet">
              <h1>{exam.title}</h1>
              <Button
                text="عرض"
                path={`/schoolExams/${exam._id}`}
                className="general-btn"
              />
            </div>
          ))}
        </div>
      </StudentLibrary>
    </>
  );
}

export default Exams;
