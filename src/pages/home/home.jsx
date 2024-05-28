import "./home.css";
import { Link } from "react-router-dom";
import ParticlesComponent from "../config/particles-config";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* <ParticlesComponent id="particles" /> */}
      <Header />
      <Features />
      <Testimonials />
      <Stages />
      <Faqs />
    </>
  );
};
function Header() {
  useEffect(() => {
    let animatedH1 = document.querySelector(".animated-h1");
    let width = animatedH1.offsetWidth + 25;
    let i = 30;

    let a = setInterval(() => {
      animatedH1.style.width = `${i}px`;
      if (i > width) {
        let b = setInterval(() => {
          i -= 30;
          if (i === 0) {
            clearInterval(b);
          }
        }, 200);
      } else {
        i += 30;
      }
    }, 200);
  }, []);

  return (
    <section className="header">
      <div className="container">
        <div className="teacher-heading" data-aos="fade-left">
          <h1 className="animated-h1">
            الامين في <span>اللغة العربية</span>
          </h1>
          <p>
            منصه الامين هي منصة متخصصة في مادة اللغة العربية تحتوي علي نماذج
            الشيتات ونماذج الامتحانات وتسجيلات الحصص والفيديوهات الخاصة بالشرح
            ومتابعة الطالب
          </p>
          <div className="buttons">
            <Button path="/login" text="تسجيل" />
            <Button path="/register" text="انشاء" />
          </div>
        </div>
        <div className="teacher-background" data-aos="fade-right">
          <img
            src="https://aminelgazy.mathjewel.com/amin.png"
            alt="امين حجازي"
          />
        </div>
      </div>
    </section>
  );
}
export function MainTitle({ children }) {
  return <h1 className="main-title">{children}</h1>;
}
export function Feature({ image, header, children, path }) {
  return (
    <div className="feature-box" data-aos="fade-down" data-aos-duration="1300">
      <div className="feature-background">
        <img src={image} alt={header} />
        <span>{header}</span>
      </div>
      <p>{children}</p>
      <Button path={path} text="عرض" />
    </div>
  );
}
function Features() {
  return (
    <section className="features">
      <MainTitle>الخدمات</MainTitle>
      <div className="container">
        <div className="features-boxes">
          <Feature
            image={"https://aminelgazy.mathjewel.com/video.png"}
            header="الفيديوهات"
            path="/lessonVideoList"
          >
            {" "}
            ستجد في هذه الصفحه النماذج اليومية للشيتات الخاصة بالحصص اليومية لكل
            مجموعة بالاضافة الي الاجابات الخاصه
          </Feature>
          <Feature
            image={"https://aminelgazy.mathjewel.com/sheet.png"}
            header="الشيتات"
            path="/mysheets"
          >
            {" "}
            ستجد في هذه الصفحه النماذج اليومية للشيتات الخاصة بالحصص اليومية لكل
            مجموعة بالاضافة الي الاجابات الخاصه
          </Feature>
          <Feature
            image={"https://aminelgazy.mathjewel.com/exam.png"}
            header="الامتحانات"
            path="/myexams"
          >
            {" "}
            ستجد في هذه الصفحه النماذج اليومية للشيتات الخاصة بالحصص اليومية لكل
            مجموعة بالاضافة الي الاجابات الخاصه
          </Feature>
        </div>
        <Button path="/features" className="show-all-btn" text="عرض المزيد" />
      </div>
    </section>
  );
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
      <Star />
      <p>{children}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <MainTitle>الاراء</MainTitle>
      <div className="container">
        <div className="testimonials-boxes">
          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-3.png">
            حضرتك انت مش عارف معزتك عندي اد ايه وبدعيلك ازاي لانك حضرتك مش مجرد
            مدرس لغه عربية حضرتك اخ واب لينا
          </Testimonial>
          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-2.png">
            الامتحان مخرجش من الي حضرتك ادتهولنا الاسئله كانت جيه بالظبط وخصوصا
            النصوص والقصه ومواضيع التعبير{" "}
          </Testimonial>
          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-3.png">
            ربنا يبارك في حضرتك انا حبيت اللغه العربية اوي مع حضرتك وبجد انا
            بدعيلك من كل قلبي وبتمني لحضرتك التوفيق{" "}
          </Testimonial>

          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-2.png">
            كانت اجمل ايام حياتي لما كنا مع حضرتك في الدرس ولسه لغايط دلوقتي
            فاكر كل كلمه قولتهالي وكل نصيحه نصحتهالي{" "}
          </Testimonial>
          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-3.png">
            استاذ امين من اكتر الاساتذه الشاطره الي خدت معاها درس وبصراحه خلاني
            محترفة لغه عربيه ربنا يكرمو بجد والله
          </Testimonial>
          <Testimonial image="https://aminelgazy.mathjewel.com/avatar-2.png">
            شكرا جدا استاذ امين علي الي انت عملتو معانا طول السنه الامتحان كله
            جه من الي حضرتك قولتو بالظبط{" "}
          </Testimonial>
        </div>
        <Button path="/" className="show-all-btn" text="عرض المزيد" />
      </div>
    </section>
  );
}
function Stages() {
  return (
    <section className="stages">
      <MainTitle>الخطوات المنهجية</MainTitle>
      <div className="container">
        <div className="right-side">
          <div className="stage-list">
            <div className="stage-item">
              <h1>الخطوة الاولي</h1>
              <p>
                شرح المنهج بالكامل وجميع الملاحظات والاخطاء التي يقع فيها الطالب
              </p>
            </div>
            <div className="stage-item">
              <h1>الخطوة الثالثة</h1>
              <p>تمرين الطالب علي الشرح عن طريق اعطائه شيت صغير</p>
            </div>
          </div>
        </div>
        <div className="middle-side">
          <div className="stage">
            <div className="circle-1">
              <div className="nested-circle"></div>
            </div>
            <div className="circle-2">
              <div className="nested-circle"></div>
            </div>
            <div className="circle-3">
              <div className="nested-circle"></div>
            </div>
          </div>
        </div>
        <div className="left-side">
          <div className="stage-item">
            <h1>الخطوة الثانية</h1>
            <p>
              حل اسئلة وتمارين خاصة بالجزء المشروح وايضا حل اسئلة الواجب
              والمتابعة المستمره مع الطالب
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function FaqDetails({ children, question }) {
  const [faq, setFaq] = useState(false);

  return (
    <div className="faq-details">
      {" "}
      <div className="faq-heading">
        <h2 onClick={() => setFaq(!faq)}>{question}</h2>
        <svg
          height="30px"
          width="30px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512.035 512.035"
        >
          <g transform="translate(1 1)">
            <polygon
              style={{ fill: "#63D3FD" }}
              points="33.151,255.035 255.017,502.501 476.884,255.035 476.884,33.168 255.017,255.035    33.151,33.168  "
            />
            <polygon
              style={{ fill: "#FFFFFF" }}
              points="7.551,255.035 255.017,502.501 33.151,255.035 33.151,33.168 7.551,7.568  "
            />
            <polygon
              style={{ fill: "#3DB9F9" }}
              points="476.884,33.168 476.884,255.035 255.017,502.501 502.484,255.035 502.484,7.568  "
            />
            <polygon
              style={{ fill: "#FFE100" }}
              points="33.151,33.168 255.017,255.035 476.884,33.168 255.017,255.035  "
            />
            <path d="M255.017,511.035c-2.56,0-4.267-0.853-5.973-2.56L1.577,261.008c-1.707-1.707-2.56-3.413-2.56-5.973V7.568   c0-3.413,1.707-6.827,5.12-7.68c3.413-1.707,6.827-0.853,9.387,1.707l241.493,241.493l104.96-104.96   c3.413-3.413,8.533-3.413,11.947,0s3.413,8.533,0,11.947L260.991,261.008c-3.413,3.413-8.533,3.413-11.947,0L16.084,28.048v223.573   l238.933,238.933l238.933-238.933V28.048l-70.827,70.827c-3.413,3.413-8.533,3.413-11.947,0c-3.413-3.413-3.413-8.533,0-11.947   l85.333-85.333c2.56-2.56,5.973-3.413,9.387-1.707c3.413,0.853,5.12,4.267,5.12,7.68v247.467c0,2.56-0.853,4.267-2.56,5.973   L260.991,508.475C259.284,510.181,257.577,511.035,255.017,511.035z" />
            <path d="M400.084,118.501c0-5.12-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533   C396.671,127.035,400.084,123.621,400.084,118.501" />
          </g>
        </svg>
      </div>
      {faq ? children : ""}
    </div>
  );
}
function Faqs() {
  return (
    <section className="Faqs">
      <MainTitle>الاسئلة الشائعة </MainTitle>
      <div className="container">
        <FaqDetails question="ازاي اقدر اشتري الشيت ؟">
          {" "}
          <p>
            تقدر تشتري الشيت عن طريق زرار الحجز هيوديك لصفحه الحجز وتبدا تشوف
            وسيله الدفع المناسبة ليك وتختارها وتشتري{" "}
          </p>{" "}
        </FaqDetails>
        <FaqDetails question="ازاي اقدر اتفرج علي الفيديوهات بتاعت المدرس ؟">
          {" "}
          <p>
            تقدر تخش علي الاكونت بتاعك وهتلاقي قايمه الفيديوهات بتاعت المدرس الي
            انت اشتريتها هتلاقيها متوفره في حسابك اضغط عليهم واتفرج
          </p>{" "}
        </FaqDetails>
        <FaqDetails question="هل انا اقدر ارجع الدرس بعد ماشتريته ؟">
          {" "}
          <p>
            ايوه حضرتك تقدر تتواصل مع المدرس وتبعتله الوصل وهو يقدر يحولك فلوسك
            تاني والكورس هيتشال من حسابك في خلال 24 ساعه
          </p>{" "}
        </FaqDetails>

        <FaqDetails question="ايه وسائل الدفع الي اقدر اشتري بيها الدرس">
          {" "}
          <p>حضرتك تقدر تدفع فودافون كاش او فيزا</p>
        </FaqDetails>
      </div>
    </section>
  );
}
function Star() {
  return (
    <ul>
      <li key={"star"}>
        {Array.from({ length: 8 }, () => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              id="star"
            >
              <path
                fill="#ff7900"
                d="M10.975 18.847a2 2 0 0 1 2.049.002l3.34 1.997c.8.478 1.778-.229 1.568-1.123l-.877-3.72a2 2 0 0 1 .646-1.978l2.934-2.513c.705-.603.326-1.746-.6-1.819l-3.882-.325a2 2 0 0 1-1.671-1.205L12.968 4.63c-.358-.841-1.578-.841-1.936 0L9.52 8.154a2 2 0 0 1-1.67 1.203l-3.885.326c-.925.073-1.304 1.216-.6 1.819L6.3 14.015a2 2 0 0 1 .645 1.978l-.877 3.72c-.21.894.768 1.6 1.567 1.122l3.34-1.988Z"
              ></path>
            </svg>
          );
        })}
      </li>
    </ul>
  );
}
export default Home;
