import { Link } from "react-router-dom";
import "./dashboard.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [grad, setGrad] = useState("");
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(false);

  const addNewStudent = async (e) => {
    e.preventDefault();
    if (!name) {
      return toast.error("برجاء كتابة الاسم..!");
    }
    if (!code) {
      return toast.error("برجاء كتابة الكود..!");
    }
    if (!grad) {
      return toast.error("برجاء اختيار الصف..!");
    }
    if (!place) {
      return toast.error("برجاء اختيار السنتر..!");
    }

    const studentData = {
      name,
      code,
      grad,
      place,
    };

    try {
      setLoading(true);
      const response = await axios.post("/students", studentData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("تمت العملية بنجاح");
      }
    } catch (error) {
      toast.error("فشلت العملية..!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-exam">
      <div className="container">
        <Sidebar />
        <div className="add-content">
          <form onSubmit={addNewStudent}>
            <label>اسم الطالب</label>
            <div className="input-group">
              <input
                type="text"
                placeholder="اسم الطالب"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label>كود الطالب</label>
            <div className="input-group">
              <input
                type="number"
                placeholder="كود الطالب"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <label>السنة الدراسية</label>
            <div className="input-group">
              <select
                value={grad}
                onChange={(e) => setGrad(e.target.value)}
                defaultValue="choose"
              >
                <option value="choose" disabled hidden>
                  اختر الصف
                </option>
                <option value="prep" disabled>
                  المرحلة الاعدادية
                </option>
                <option value="الاول الاعدادي">الاول الاعدادي</option>
                <option value="الثاني الاعدادي">الثاني الاعدادي</option>
                <option value="الثالث الاعدادي">الثالث الاعدادي</option>
                <option value="sec" disabled>
                  المرحلة الثانوية
                </option>
                <option value="الاول الثانوي">الاول الثانوي</option>
                <option value="الثاني الثانوي">الثاني الثانوي</option>
                <option value="الثالث الثانوي">الثالث الثانوي</option>
              </select>
            </div>
            <label>السنتر</label>
            <div className="input-group">
              <select
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                defaultValue="choose"
              >
                <option value="choose" disabled hidden>
                  اختر السنتر
                </option>
                <option value="سنتر الامين">سنتر الامين</option>
                <option value="سنتر القمة">سنتر القمة</option>
                <option value="سنتر ابن سينا">سنتر ابن سينا</option>
              </select>
            </div>
            <button disabled={loading}>
              {loading ? `جاري الرفع...` : "تاكيد"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
