import { useEffect, useState } from "react";
import MaterialPhoto from "../Blackboards/MaterialPhoto";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNowStrict } from "date-fns";
import { ar } from "date-fns/locale";

function SchoolExams() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  const [examInfo, setExamInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleExam = async () => {
      try {
        const response = await axios.get(`/exams/${id}`);
        setExamInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleExam();
  }, []);

  const formattedDate = examInfo
    ? formatDistanceToNowStrict(new Date(examInfo.createdAt), { locale: ar })
    : "";

  return (
    <>
      <MaterialPhoto
        path={examInfo?.image}
        text={examInfo?.title || "امتحان البلاغة"}
        date={`منذ ${formattedDate}`}
      />
    </>
  );
}

export default SchoolExams;
