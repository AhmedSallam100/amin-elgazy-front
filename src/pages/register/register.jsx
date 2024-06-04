import "./register.css";
import { Button } from "../home/home";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../redux/slices/usersApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [grad, setGrad] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    if (!name) {
      return toast.error("برجاء كتابة الاسم..!");
    }
    if (!email) {
      return toast.error("برجاء كتابة الايميل..!");
    }
    if (!phone) {
      return toast.error("برجاء كتابة رقم الهاتف..!");
    }
    if (!grad) {
      return toast.error("برجاء اختيار الصف..!");
    }
    if (!password) {
      return toast.error("برجاء كتابة كلمة المرور..!");
    }
    if (!confirmPassword) {
      return toast.error("برجاء تأكيد كلمة المرور..!");
    }
    if (password !== confirmPassword) {
      toast.error("كلمات المرور غير متطابقة..!");
    } else {
      try {
        const res = await register({
          name,
          email,
          phone,
          grad,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/login");
        toast.success("تم انشاء الحساب..!");
      } catch (error) {
        toast.error("حدث خطأ..!");
        console.log(error);
      }
    }
  };

  return (
    <>
      <RegisterAndLogin className="register-section">
        {" "}
        <div className="container">
          <div className="register-info">
            <div className="photo">
              <img
                src="https://aminelgazy.mathjewel.com/avatar-1.png"
                alt="طالب"
              />
            </div>
            <form onSubmit={registerSubmitHandler}>
              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  className="form-group"
                  style={{ width: "50%", marginBottom: "0" }}
                >
                  <label>الاسم</label>
                  <input
                    type="text"
                    placeholder="الاسم"
                    name="full-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ width: "50%", marginBottom: "0" }}
                >
                  <label>الايميل</label>
                  <input
                    type="email"
                    placeholder="الايميل"
                    name="full-name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>رقم الهاتف</label>
                <input
                  type="tel"
                  dir="rtl"
                  placeholder="رقم الهاتف"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>الصف</label>
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
              <div
                style={{ display: "flex", gap: "12px", marginBottom: "20px" }}
              >
                <div
                  className="form-group"
                  style={{ width: "50%", marginBottom: "0", marginTop: "0" }}
                >
                  <label>كلمة المرور</label>
                  <input
                    type="password"
                    placeholder="كلمة المرور"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div
                  className="form-group"
                  style={{ width: "50%", marginBottom: "0", marginTop: "0" }}
                >
                  <label>تأكيد كلمة المرور</label>
                  <input
                    type="password"
                    placeholder="تأكيد كلمة المرور"
                    name="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="general-btn create-btn">
                انشاء{" "}
              </button>
              <div className="login-remember">
                <span> لديك بالفعل حساب ؟ </span>
                <Button text="تسجيل الدخول " path="/login" />
              </div>
            </form>
          </div>
        </div>
      </RegisterAndLogin>
    </>
  );
}
export function RegisterAndLogin({ children, className }) {
  return (
    <section className={className}>
      <div className="container">{children}</div>
    </section>
  );
}
