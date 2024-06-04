import { StudentLibrary } from "../showExams/showExam";
import { Button } from "../home/home";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Board() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  const [boards, setBoards] = useState([]);
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get("/boards");
        console.log(response.data);
        setBoards(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBoards();
  }, []);
  return (
    <>
      <StudentLibrary>
        <div className="mySheet-List">
          {boards.length === 0 && (
            <div className="no-exam-message">
              <i className="uil uil-exclamation-triangle"></i>
              <h1>لا يوجد سبورات حتي الان</h1>
              <Button text="الصفحة الرئيسية" path={`/`} />
            </div>
          )}
          {boards.map((board) => (
            <div className="sheet">
              <h1>{board.title}</h1>
              <Button
                text="عرض"
                path={`/blackboardsList/${board._id}`}
                className="general-btn"
              />
            </div>
          ))}
        </div>
      </StudentLibrary>
    </>
  );
}

export default Board;
