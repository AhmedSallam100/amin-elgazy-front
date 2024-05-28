import { Link } from "react-router-dom";
import "./dashboard.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";

const AddSheet = () => {
  const [title, setTitle] = useState("");
  const [grad, setGrad] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  let addNewExam = async (e) => {
    e.preventDefault();
    if (!title) {
      return toast.error("برجاء كتابة عنوان..!");
    }
    if (!grad) {
      return toast.error("برجاء اختيار الصف..!");
    }
    if (!image) {
      return toast.error("برجاء رفع الصورة..!");
    }

    const examData = new FormData();
    examData.set("title", title);
    examData.set("grad", grad);
    examData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post("/boards", examData, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("تمت العملية بنجاح");
      }
    } catch (error) {
      toast.error("فشلت العملية..!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-exam">
      <div className="container">
        <Sidebar />
        <div className="add-content">
          <form onSubmit={addNewExam}>
            <label>العنوان</label>
            <div className="input-group">
              <input
                type="text"
                placeholder="العنوان"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <label>السنة الدراسية</label>
            <div className="input-group">
              <select value={grad} onChange={(e) => setGrad(e.target.value)}>
                <option value="choose" disabled selected hidden>
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
            <label>الصورة</label>
            <div className="input-group">
              <div className="upload-content">
                <i className="uil uil-image"></i>
              </div>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
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

export default AddSheet;
