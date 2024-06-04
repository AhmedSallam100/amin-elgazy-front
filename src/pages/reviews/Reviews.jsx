import "../home/home.css";
import { Link, useNavigate } from "react-router-dom";
import ParticlesComponent from "../config/particles-config";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
    AOS.init();
  }, [navigate]);

  return (
    <>
      <Testimonials />
    </>
  );
};

export function MainTitle({ children }) {
  return <h1 className="main-title">{children}</h1>;
}

export function Button({ className = "", path = "/", text }) {
  return (
    <Link to={path} className={className}>
      {text}
    </Link>
  );
}

function Testimonial({ image, children }) {
  return (
    <div
      className="testimonial-box"
      data-aos="fade-down"
      data-aos-duration="1300"
    >
      <img src={image} alt="طالب" />
      <p>{children}</p>
    </div>
  );
}

function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/reviews");
        setReviews(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        {reviews.length === 0 && (
          <div className="no-exam-message">
            <i className="uil uil-exclamation-triangle"></i>
            <h1>لا يوجد تقييمات حتي الان</h1>
            <Button text="اضافة تقييم" path={`/add-review`} />
          </div>
        )}
        <div className="testimonials-boxes">
          {reviews.map((review) => (
            <Testimonial image="https://aminelgazy.mathjewel.com/avatar-2.png">
              <span style={{ color: "var(--main-color)" }}>{review.name}</span>
              <br />
              {review.message}
            </Testimonial>
          ))}
          {/* <Testimonial image="https://aminelgazy.mathjewel.com/avatar-2.png">
            الامتحان مخرجش من الي حضرتك ادتهولنا الاسئله كانت جيه بالظبط وخصوصا
            النصوص والقصه ومواضيع التعبير
          </Testimonial>
          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-3.png">
            ربنا يبارك في حضرتك انا حبيت اللغه العربية اوي مع حضرتك وبجد انا
            بدعيلك من كل قلبي وبتمني لحضرتك التوفيق
          </Testimonial>

          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-2.png">
            كانت اجمل ايام حياتي لما كنا مع حضرتك في الدرس ولسه لغايط دلوقتي
            فاكر كل كلمه قولتهالي وكل نصيحه نصحتهالي
          </Testimonial>
          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-3.png">
            استاذ امين من اكتر الاساتذه الشاطره الي خدت معاها درس وبصراحه خلاني
            محترفة لغه عربيه ربنا يكرمو بجد والله
          </Testimonial>
          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-2.png">
            شكرا جدا استاذ امين علي الي انت عملتو معانا طول السنه الامتحان كله
            جه من الي حضرتك قولتو بالظبط
          </Testimonial> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
