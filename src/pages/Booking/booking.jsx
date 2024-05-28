import "./booking.css";
import { MainTitle } from "../home/home";
import { Button } from "../home/home";
export default function Booking() {
  return (
    <>
      <BookingDetails />
    </>
  );
}
function CorrectIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      style={{ fill: "#0075ff" }}
    >
      <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.707,12.707l-7.56,7.56 c-0.188,0.188-0.442,0.293-0.707,0.293s-0.52-0.105-0.707-0.293l-3.453-3.453c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0 l2.746,2.746l6.853-6.853c0.391-0.391,1.023-0.391,1.414,0S22.098,12.316,21.707,12.707z"></path>
    </svg>
  );
}
function BookingDetails() {
  return (
    <section className="booking-section">
      <MainTitle>الحجز </MainTitle>
      <div className="container">
        <div className="booking-details">
          <div className="booking-number">
            <span>01025376604</span>
          </div>
          <div className="booking-price">
            <span>130 جنيه</span>
            <span>150 مذكره</span>
          </div>
          <p>تعليمات</p>
          <ul>
            <li>
              <CorrectIcon /> تأكد من كتابة الرقم بشكل صحيح{" "}
            </li>
            <li>
              {" "}
              <CorrectIcon /> تاكد من تحويل المبلغ المطلوب بشكل صحيح
            </li>
            <li>
              {" "}
              <CorrectIcon /> بعد التحويل قم بارسال صوره بتاكيد التحويل{" "}
            </li>
            <li></li>
          </ul>
          <Button path="/" className="general-btn" text="حجز" />
        </div>
      </div>
    </section>
  );
}
