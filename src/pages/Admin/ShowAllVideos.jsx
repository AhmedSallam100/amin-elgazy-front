import { Link } from "react-router-dom";
import "./dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { toast } from "react-toastify";

const ShowAllVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("/videos");
        setVideos(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);

  const handleDelete = async (e, videoId) => {
    e.preventDefault();
    try {
      await axios.delete(`/videos/${videoId}`);
      setVideos(videos.filter((video) => video._id !== videoId));
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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredVideos = selectedGrade
    ? videos.filter((video) => video.grad === selectedGrade)
    : videos;

  const finalFilteredVideos = selectedCategory
    ? filteredVideos.filter((video) => video.type === selectedCategory)
    : filteredVideos;

  return (
    <div className="show-all-exams">
      <div className="container">
        <div className="table_component" role="region" tabIndex="0">
          <div className="table-head">
            <h1>الفيديوهات</h1>
            <div className="filter-search">
              <form style={{ width: "450px" }}>
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
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="" disabled>
                    اختر التصنيف
                  </option>
                  <option value="بلاغة">بلاغة</option>
                  <option value="نحو">نحو</option>
                  <option value="قراءة">قراءة</option>
                  <option value="نصوص">نصوص</option>
                  <option value="ادب">ادب</option>
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
                <th>اسم الفيديو</th>
                <th>الصف</th>
                <th>التصنيف</th>
                <th>تاريخ النشر</th>
                <th>اجراءات</th>
              </tr>
            </thead>
            <tbody>
              {finalFilteredVideos.map((video, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{video.title}</td>
                  <td>{video.grad}</td>
                  <td>{video.type}</td>
                  <td>
                    {video
                      ? format(new Date(video.createdAt), "yyyy/M/d", {
                          locale: ar,
                        })
                      : ""}
                  </td>
                  <td className="action-icons">
                    <div>
                      <Link to={`/video-list/${video._id}`}>
                        <i className="uil uil-eye show-exam"></i>
                      </Link>
                      <form>
                        <button onClick={(e) => handleDelete(e, video._id)}>
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

export default ShowAllVideos;
