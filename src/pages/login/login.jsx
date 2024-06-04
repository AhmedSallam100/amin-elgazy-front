import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "../home/home";
import { RegisterAndLogin } from "../register/register";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../redux/slices/usersApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/students");
        setStudents(response?.data);
        const studentCodes = response?.data.map((student) => student.code);
        console.log("أكواد الطلاب في مصفوفة:");
        console.log(studentCodes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudents();
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    if (!code) {
      return toast.error("برجاء كتابة الكود..!");
    }
    if (!email) {
      return toast.error("برجاء كتابة الايميل..!");
    }
    if (!password) {
      return toast.error("برجاء كتابة كلمة المرور..!");
    }

    const isCodeValid = students.some(
      (student) => student.code === parseInt(code)
    );

    if (!isCodeValid) {
      return toast.error("الكود غير موجود..!");
    }

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
      toast.success("تم تسجيل الدخول..!");
    } catch (error) {
      toast.error("الايميل او كلمة المرور خطأ..!");
      console.log(error);
    }
  };

  return (
    <RegisterAndLogin className="login-section" header="تسجيل دخول">
      <div className="container">
        <div className="login-info">
          <div className="photo">
            <img
              src="https://aminelgazy.mathjewel.com/avatar-1.png"
              alt="طالب"
            />
          </div>
          <form onSubmit={loginSubmitHandler}>
            <div className="form-group">
              <label>الكود</label>
              <input
                type="number"
                placeholder="الكود"
                name="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>الايميل</label>
              <input
                type="email"
                placeholder="الايميل"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>كلمة المرور</label>
              <input
                type="password"
                placeholder="كلمة المرور"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
  );
}
