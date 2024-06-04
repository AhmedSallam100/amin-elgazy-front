import "./features.css";
import { Feature } from "../home/home";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AllFeatures() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <section className="features">
        <div className="container">
          <div className="features-boxes features-lists">
            <Feature
              image={"https://aminelgazy.mathjewel.com/sheet.png"}
              header="الامتحانات"
              path="/chooseExam"
            >
              {" "}
              ستجد في هذه الصفحه النماذج اليومية للشيتات الخاصة بالحصص اليومية
              لكل مجموعة بالاضافة الي الاجابات الخاصه
            </Feature>
            <Feature
              image={"https://aminelgazy.mathjewel.com/sheet.png"}
              header="الشيتات"
              path="/chooseSheet"
            >
              {" "}
              ستجد في هذه الصفحه النماذج اليومية للشيتات الخاصة بالحصص اليومية
              لكل مجموعة بالاضافة الي الاجابات الخاصه
            </Feature>
            <Feature
              image={"https://aminelgazy.mathjewel.com/exam.png"}
              header="سبوره"
              path="/blackboardsList"
            >
              {" "}
              ستجد في هذه الصفحه النماذج اليومية للشيتات الخاصة بالحصص اليومية
              لكل مجموعة بالاضافة الي الاجابات الخاصه
            </Feature>
            <Feature
              image={"https://aminelgazy.mathjewel.com/video.png"}
              header="الفيديوهات"
              path="/video-list"
            >
              {" "}
              ستجد في هذه الصفحه النماذج اليومية للشيتات الخاصة بالحصص اليومية
              لكل مجموعة بالاضافة الي الاجابات الخاصه
            </Feature>
            <Feature
              image={"https://aminelgazy.mathjewel.com/exam.png"}
              header="التسجيلات"
              path="/audio-list"
            >
              {" "}
              ستجد في هذه الصفحه النماذج اليومية للشيتات الخاصة بالحصص اليومية
              لكل مجموعة بالاضافة الي الاجابات الخاصه
            </Feature>
            <Feature
              image={"https://aminelgazy.mathjewel.com/exam.png"}
              header="مذكرات"
              path="/books"
            >
              {" "}
              ستجد في هذه الصفحه النماذج اليومية للشيتات الخاصة بالحصص اليومية
              لكل مجموعة بالاضافة الي الاجابات الخاصه
            </Feature>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllFeatures;
