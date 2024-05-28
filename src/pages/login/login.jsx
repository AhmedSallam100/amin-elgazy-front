import "../register/register.css";
import { Button } from "../home/home";
import { RegisterAndLogin } from "../register/register";
export default function Login() {
  return (
    <>
      <RegisterAndLogin className="login-section" header="تسجيل دخول">
        <div className="container">
          <div className="login-info">
            <div className="photo">
              <img
                src="https://aminelgazy.mathjewel.com/avatar-1.png"
                alt="طالب"
              />
            </div>
            <form action="">
              <div className="form-group">
                <label>الاسم</label>
                <input type="text" placeholder="الاسم" name="email" />
              </div>

              <div className="form-group">
                <label>كلمة المرور</label>
                <input
                  type="password"
                  placeholder="كلمة المرور"
                  name="password"
                />
              </div>
              <button type="submit" className="general-btn create-btn">
                تسجيل الدخول{" "}
              </button>
              <div className="create-acc">
                <span> لا تمتلك حساب ؟ </span>
                <Button text="انشاء حساب الان " path="/register" />
              </div>
            </form>
          </div>
        </div>
      </RegisterAndLogin>
    </>
  );
}
