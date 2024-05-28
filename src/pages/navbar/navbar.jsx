import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false)
  return (
    <nav>
      <NavbarDesktop navMobile={navMobile} setNavMobile = {setNavMobile} />
      <NavbarMobile navMobile={navMobile}/>
    </nav>
  );
};
function NavbarDesktop({navMobile, setNavMobile}) {

  return (
    <>
      <div className="container">
        <span className="menu-icon" onClick={()=> setNavMobile(!navMobile)}>
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
        <div className="register-btn">
          <Link to={"/courses"}>حجز</Link>
          <Link to={"/login"}>تسجيل</Link>
        </div>
      </div>
    </>
  );
}
function NavbarMobile({navMobile}) {
  return (
    <div className={`navbar-mobile ${navMobile ?  "active" : ''} ` }>


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
