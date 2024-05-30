import { Link } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { toast } from "react-toastify";

const ShowAllStudents = () => {
  const [students, setStudents] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/students");
        setStudents(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudents();
  }, []);

  const handleDelete = async (e, studentId) => {
    e.preventDefault();
    try {
      await axios.delete(`/students/${studentId}`);
      setStudents(students.filter((student) => student._id !== studentId));
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

  const handlePlaceChange = (event) => {
    setSelectedPlace(event.target.value);
  };

  const filteredStudents = students.filter((student) => {
    return (
      (!selectedGrade || student.grad === selectedGrade) &&
      (!selectedPlace || student.place === selectedPlace)
    );
  });

  return (
    <div className="show-all-exams">
      <div className="container">
        <div className="table_component" role="region" tabIndex="0">
          <div className="table-head">
            <h1>الطلاب</h1>
            <div className="filter-search">
              <form style={{ width: "450px" }}>
                <span>فلترة</span>
                <select value={selectedGrade} onChange={handleGradeChange}>
                  <option value="" hidden>
                    اختر الصف
                  </option>
                  <option value="الاول الاعدادي">الاول الاعدادي</option>
                  <option value="الثاني الاعدادي">الثاني الاعدادي</option>
                  <option value="الثالث الاعدادي">الثالث الاعدادي</option>
                  <option value="الثالث الاعدادي">المرحلة الثانوية</option>
                  <option value="الاول الثانوي">الاول الثانوي</option>
                  <option value="الثاني الثانوي">الثاني الثانوي</option>
                  <option value="الثالث الثانوي">الثالث الثانوي</option>
                </select>
                <select value={selectedPlace} onChange={handlePlaceChange}>
                  <option value="choose" hidden>
                    اختر السنتر
                  </option>
                  <option value="سنتر الامين">سنتر الامين</option>
                  <option value="سنتر القمة">سنتر القمة</option>
                  <option value="سنتر ابن سينا">سنتر ابن سينا</option>
                </select>
                <button>
                  <i className="uil uil-sliders-v-alt"></i>
                </button>
              </form>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>الرقم</th>
                <th>اسم الطالب</th>
                <th>كود الطالب</th>
                <th>الصف</th>
                <th>السنتر</th>
                <th>تاريخ الاضافة</th>
                <th>اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.code}</td>
                  <td>{student.grad}</td>
                  <td>{student.place}</td>
                  <td>
                    {student
                      ? format(new Date(student.createdAt), "yyyy/M/d", {
                          locale: ar,
                        })
                      : ""}
                  </td>
                  <td className="action-icons">
                    <div>
                      <Link to={`/students/${student._id}`}>
                        <i className="uil uil-eye show-exam"></i>
                      </Link>
                      <form>
                        <button onClick={(e) => handleDelete(e, student._id)}>
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

export default ShowAllStudents;
