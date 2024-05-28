import "./exam.css";
function Exam() {
  return (
    <>
      <ExamSection />
    </>
  );
}
function ExamSection() {
  return (
    <section className="exam-section">
      <div className="container">
        <ExamDetails num={1} />
        <ExamDetails num={2} />
        <ExamDetails num={3} />
      </div>
    </section>
  );
}
function ExamDetails({ num }) {
  return (
    <div className="exam-details">
      <p>
        <span>{num} - </span> انا اؤمن بالقيم العليا المثلي قم بتثنية كلمة
        العليا
      </p>
      <p className="exam-question">ما مثني كلمة العليا ؟</p>
      <div className="exam-answers">
        <ExamAnswers />
      </div>
    </div>
  );
}
function ExamAnswers() {
  return (
    <ul>
      <li>{"(أ)"} العليييات</li>
      <li>{"(ب)"} العلييت</li>
      <li>{"(ج)"} العلييان</li>
      <li>{"(د)"} الاعلاون</li>
    </ul>
  );
}
export default Exam;
