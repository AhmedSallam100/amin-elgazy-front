import axios from "axios";
import "./review.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <ContactDetails />
    </>
  );
};
function ContactDetails() {
  return (
    <section className="contact-us">
      <div className="container">
        <ContactForm />
      </div>
    </section>
  );
}
function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setName(userInfo?.name);
    setEmail(userInfo?.email);
    setPhone(userInfo?.phone);
  }, [userInfo]);

  let addReviewSubmitHandler = async (e) => {
    e.preventDefault();
    if (!message) {
      return toast.error("برجاء كتابة الرسالة..!");
    }
    console.log({ phone, email, message });
    const reviewData = {
      name,
      phone,
      email,
      message,
    };

    try {
      setLoading(true);
      const response = await axios.post("/reviews", reviewData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("تمت العملية بنجاح");
      }
    } catch (error) {
      toast.error("فشلت العملية..!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={addReviewSubmitHandler}>
      <div className="form-group">
        <input
          className="phone-input"
          type="text"
          placeholder="الاسم"
          name="mobilenumber"
          value={name}
          onChange={(e) => setName(e.target.value)}
          readOnly
          disabled
        />
        <input
          className="phone-input"
          type="tel"
          placeholder="رقم الهاتف"
          name="mobilenumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          readOnly
          disabled
        />
      </div>
      <div className="form-group">
        <input
          className="EmailInput"
          type="email"
          placeholder="الايميل"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly
          disabled
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="PlaceInput"
          placeholder="الرسالة"
          name="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">ارسال</button>
    </form>
  );
}
export default Contact;
