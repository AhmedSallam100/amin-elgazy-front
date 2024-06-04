import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <nav>
      <NavbarDesktop navMobile={navMobile} setNavMobile={setNavMobile} />
      <NavbarMobile navMobile={navMobile} />
    </nav>
  );
};
function NavbarDesktop({ navMobile, setNavMobile }) {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <div className="container">
        <span className="menu-icon" onClick={() => setNavMobile(!navMobile)}>
          <i className="uil uil-bars"></i>
        </span>

        <Link to="/">
          <div className="logo">
            <img
              src="https://aminelgazy.mathjewel.com/logo.png"
              alt="امين الغازي"
            />
            <span>الامين</span>
          </div>
        </Link>

        <ul>
          <li>
            <NavLink to={"/"}>الرئيسية</NavLink>
          </li>
          <li>
            <NavLink to={"/features"}>الخدمات</NavLink>
          </li>
          <li>
            <NavLink to={"/reviews"}>الاراء</NavLink>
          </li>
          <li>
            <NavLink to={"/vsdf"}>الخطوات</NavLink>
          </li>
          <li>
            <NavLink to={"/ghd"}>قيمنا</NavLink>
          </li>

          <li>
            <NavLink to={"/fdserf"}>من نحن</NavLink>
          </li>
        </ul>
        <div className="register-btn">
          {userInfo ? (
            <>
              <Link to={"/account"} className="account-link">
                <span>{userInfo.name}</span>
                <i className="uil uil-user "></i>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"} className="btns">
                تسجيل
              </Link>
              <Link to={"/courses"} className="btns">
                حجز
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
function NavbarMobile({ navMobile }) {
  return (
    <div className={`navbar-mobile ${navMobile ? "active" : ""} `}>
      <ul>
        <li>
          <Link to={"/"} className="active">
            الرئيسية
          </Link>
        </li>
        <li>
          <Link to={"/features"}>الخدمات</Link>
        </li>
        <li>
          <Link to={"/"}>الاراء</Link>
        </li>
        <li>
          <Link to={"/"}>الخطوات</Link>
        </li>
        <li>
          <Link to={"/"}>قيمنا</Link>
        </li>

        <li>
          <Link to={"/"}>من نحن</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
