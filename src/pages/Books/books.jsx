import { StudentLibrary } from "../showExams/showExam";
import { Button } from "../home/home";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./dairy.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNowStrict } from "date-fns";
import { ar } from "date-fns/locale";
import { format } from "date-fns";

function Books() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/books");
        console.log(response.data);
        setBooks(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);
  return (
    <>
      <StudentLibrary>
        {books.length === 0 && (
          <div
            className="no-exam-message"
            style={{
              textAlign: "center",
            }}
          >
            <i className="uil uil-exclamation-triangle"></i>
            <h1>لا يوجد مذكرات حتي الان</h1>
            <Button text="الصفحة الرئيسية" path={`/`} />
          </div>
        )}
        <div className="myDiary-List book-list">
          {books.map((book) => (
            <div className="book" key={book.id}>
              <div className="book-img">
                <img src={book?.image} alt="مذكرة" />
              </div>
              <div className="book-data">
                <h1>{book?.title}</h1>
                <span>
                  {book
                    ? format(new Date(book?.createdAt), "yyyy/M/d", {
                        locale: ar,
                      })
                    : ""}
                </span>
              </div>
              <div className="book-links">
                <Link to={book?.book} target="_blank">
                  قراءة
                </Link>
                <a href={book?.book} download={book?.title + ".pdf"}>
                  تحميل
                </a>
              </div>
            </div>
          ))}
        </div>
      </StudentLibrary>
    </>
  );
}

export default Books;
