import "./register.css";
import { Button } from "../home/home";
export default function Register() {
  return (
    // https://www.youtube.com/watch?v=K2AoMJWNFT8
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
            <form action="">
              <div className="form-group">
                <label>الاسم</label>
                <input
                  type="text"
                  placeholder="الاسم"
                  name="full-name"
                />
              </div>
              <div className="form-group">
                <label>رقم الهاتف</label>
                <input
                  type="tel"
                  dir="rtl"
                  placeholder="رقم الهاتف"
                  name="phone"
                />
              </div>
              <div className="form-group">
                <label>كلمة المرور</label>
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  name="password"
                />
              </div>
              <div className="form-group">
                <label>الصف</label>
                <select>
                  <option value="choose" disabled selected hidden>
                    اختر الصف
                  </option>
                  <option value="prep" disabled>
                    المرحلة الاعدادية
                  </option>
                  <option value="1prep">الاول الاعدادي</option>
                  <option value="2prep">الثاني الاعدادي</option>
                  <option value="3prep">الثالث الاعدادي</option>
                  <option value="sec" disabled>
                    المرحلة الثانوية
                  </option>
                  <option value="1sec">الاول الثانوي</option>
                  <option value="2sec">الثاني الثانوي</option>
                  <option value="3sec">الثالث الثانوي</option>
                </select>
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
