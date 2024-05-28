import { Link } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNowStrict } from "date-fns";
import { ar } from "date-fns/locale";
import { toast } from "react-toastify";

const ShowAllExams = () => {
  const [exams, setExams] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("");

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get("/exams");
        setExams(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExams();
  }, []);

  const handleDelete = async (e, examId) => {
    e.preventDefault();
    try {
      await axios.delete(`/exams/${examId}`);
      setExams(exams.filter((exam) => exam._id !== examId));
      toast.success("تم الحذف بنجاح");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        toast.error("حدث خطأ اثناء العملية. يرجى المحاولة مرة اخرى.");
      } else {
        console.log("Error", error.message);
        toast.error("حدث خطأ اثناء العملية. يرجى المحاولة مرة اخرى.");
      }
    }
  };

  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  const filteredExams = selectedGrade
    ? exams.filter((exam) => exam.grad === selectedGrade)
    : exams;

  return (
    <div className="show-all-exams">
      <div className="container">
        <div className="table_component" role="region" tabIndex="0">
          <div className="table-head">
            <h1>الامتحانات</h1>
            <form>
              <span>فلترة</span>
              <select value={selectedGrade} onChange={handleGradeChange}>
                <option value="" disabled>
                  اختر الصف
                </option>
                <option value="الاول الاعدادي">الاول الاعدادي</option>
                <option value="الثاني الاعدادي">الثاني الاعدادي</option>
                <option value="الثالث الاعدادي">الثالث الاعدادي</option>
                <option value="الاول الثانوي">الاول الثانوي</option>
                <option value="الثاني الثانوي">الثاني الثانوي</option>
                <option value="الثالث الثانوي">الثالث الثانوي</option>
              </select>
              <button>
                <i className="uil uil-sliders-v-alt"></i>
              </button>
            </form>
          </div>
          <table>
            <thead>
              <tr>
                <th>الرقم</th>
                <th>اسم الامتحان</th>
                <th>الصف</th>
                <th>تاريخ الاضافة</th>
                <th>اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredExams.map((exam, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{exam.title}</td>
                  <td>{exam.grad}</td>
                  <td>
                    {formatDistanceToNowStrict(new Date(exam.createdAt), {
                      locale: ar,
                      addSuffix: true,
                    })}
                  </td>
                  <td className="action-icons">
                    <div>
                      <Link to={`/schoolExams/${exam._id}`}>
                        <i className="uil uil-eye show-exam"></i>
                      </Link>
                      <form>
                        <button onClick={(e) => handleDelete(e, exam._id)}>
                          <i className="uil uil-trash-alt delete-exam"></i>
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowAllExams;
