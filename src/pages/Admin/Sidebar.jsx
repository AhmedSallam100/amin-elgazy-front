import { Link, NavLink } from "react-router-dom";
import "./dashboard.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="ul-links">
        <NavLink className="ul-link" to={"/dashboard/add-exam"}>
          <i className="uil uil-clipboard-alt"></i>
          <Link to={"/dashboard/add-exam"}>اضافة امتحان</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-sheet"}>
          <i className="uil uil-clipboard-alt"></i>
          <Link to={"/dashboard/add-sheet"}>اضافة شيت</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-board"}>
          <i className="uil uil-clipboard"></i>
          <Link to={"/dashboard/add-board"}>اضافة سبورة</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-video"}>
          <i className="uil uil-video"></i>
          <Link to={"/dashboard/add-video"}>اضافة فيديو</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-audio"}>
          <i className="uil uil-record-audio"></i>
          <Link to={"/dashboard/add-audio"}>اضافة تسجيل</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/add-book"}>
          <i className="uil uil-books"></i>
          <Link to={"/dashboard/add-book"}>اضافة مذكرة</Link>
        </NavLink>
        {/* <NavLink className="ul-link" to={"/dashboard/add-online-exam"}>
          <i className="uil uil-keyboard"></i>
          <Link to={"/dashboard/add-online-exam"}>اضافة امتحان الكتروني</Link>
        </NavLink> */}
        <NavLink className="ul-link" to={"/dashboard/add-student"}>
          <i class="uil uil-user-plus"></i>
          <Link to={"/dashboard/add-student"}>اضافة طالب</Link>
        </NavLink>
        <NavLink className="ul-link" to={"/dashboard/all-data"}>
          <i className="uil uil-folder-open"></i>
          <Link to={"/dashboard/all-data"}>جميع البيانات</Link>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
