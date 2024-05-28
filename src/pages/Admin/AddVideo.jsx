import { Link } from "react-router-dom";
import "./dashboard.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Sidebar from "./Sidebar";

const AddVideo = () => {
  const [title, setTitle] = useState("");
  const [grad, setGrad] = useState("");
  const [type, setType] = useState("");
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // New state for upload progress

  const addNewExam = async (e) => {
    e.preventDefault();
    if (!title) {
      return toast.error("برجاء كتابة عنوان..!");
    }
    if (!grad) {
      return toast.error("برجاء اختيار الصف..!");
    }
    if (!type) {
      return toast.error("برجاء كتابة التصنيف..!");
    }
    if (!video) {
      return toast.error("برجاء رفع الفيديو..!");
    }

    const examData = new FormData();
    examData.set("title", title);
    examData.set("grad", grad);
    examData.set("type", type);
    examData.append("video", video);

    try {
      setLoading(true);
      const response = await axios.post("/videos", examData, {
        withCredentials: true,
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percentage = Math.floor((loaded / total) * 100);
          setProgress(percentage); // Update progress percentage
        },
      });
      if (response.status === 200) {
        toast.success("تمت العملية بنجاح");
      }
    } catch (error) {
      toast.error("فشلت العملية..!");
      console.error(error);
    } finally {
      setLoading(false);
      setProgress(0); // Reset progress after upload
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
            <label>تصنيف الدرس</label>
            <div className="input-group">
              <input
                type="text"
                placeholder="تصنيف الدرس"
                value={type}
                onChange={(e) => setType(e.target.value)}
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
            <label>الفيديو</label>
            <div className="input-group">
              <div className="upload-content">
                <i className="uil uil-video"></i>
              </div>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
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

export default AddVideo;
