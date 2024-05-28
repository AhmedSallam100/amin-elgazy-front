import { StudentLibrary } from "../showExams/showExam";
import { Button } from "../home/home";
import { useEffect, useState } from "react";
import axios from "axios";

function Sheet() {
  const [sheets, setSheets] = useState([]);
  useEffect(() => {
    const fetchSheets = async () => {
      try {
        const response = await axios.get("/sheets");
        console.log(response.data);
        setSheets(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSheets();
  }, []);
  return (
    <>
      <StudentLibrary>
        <div className="mySheet-List">
          {sheets.length === 0 && (
            <div className="no-exam-message">
              <i className="uil uil-exclamation-triangle"></i>
              <h1>لا يوجد شيتات حتي الان</h1>
              <Button text="الصفحة الرئيسية" path={`/`} />
            </div>
          )}
          {sheets.map((sheet) => (
            <div className="sheet">
              <h1>{sheet.title}</h1>
              <Button
                text="عرض"
                path={`/schoolSheets/${sheet._id}`}
                className="general-btn"
              />
            </div>
          ))}
        </div>
      </StudentLibrary>
    </>
  );
}

export default Sheet;
