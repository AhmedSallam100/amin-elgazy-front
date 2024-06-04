import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "./config";
import Booking from "./pages/Booking/booking";
import Courses from "./pages/Courses/courses";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Navbar from "./pages/navbar/navbar";
import Exam from "./pages/Exams/exam";
import ShowExam from "./pages/showExams/showExam";
import Sheets from "./pages/sheets/sheet";
import MyExams from "./pages/myExams/myExams";
import LessonPlayer from "./pages/LessonAudio/lessonAudio";
// import AudioList from "./pages/audioList/audioList";
import AllFeatures from "./pages/Features/features";
import SchoolBoards from "./pages/Blackboards/blackboards";
import SchoolExams from "./pages/schoolExam/schoolExam";
import SchoolSheets from "./pages/schoolSheet/schoolSheet";
import Account from "./pages/account/account";
import BlackboardsList from "./pages/blackboardsList/blackBoardsList";
import LessonVideo from "./pages/LessonVideo/lessonVideo";
import AddExam from "./pages/Admin/AddExam";
import ShowAllExams from "./pages/Admin/ShowAllExams";
import AddSheet from "./pages/Admin/AddSheet";
import ShowAllSheets from "./pages/Admin/ShowAllSheets";
import AddBoard from "./pages/Admin/AddBoard";
import ShowAllBoards from "./pages/Admin/ShowAllBoards";
import AddVideo from "./pages/Admin/AddVideo";
import VideoList from "./pages/videoList/videoList";
import ShowAllVideos from "./pages/Admin/ShowAllVideos";
import AddAudio from "./pages/Admin/AddAudio";
import AudioList from "./pages/audioList/audioList";
import LessonAudio from "./pages/audioList/lessonAudio";
import ShowAllAudios from "./pages/Admin/ShowAllAudios";
import AddBook from "./pages/Admin/AddBook";
import Books from "./pages/Books/books";
import ShowAllBooks from "./pages/Admin/ShowAllBooks";
import ShowAllData from "./pages/Admin/ShowAllData";
import AddStudent from "./pages/Admin/AddStudent";
import ShowAllStudents from "./pages/Admin/ShowAllStudents";
import ScrollToTop from "./pages/scrollToTop/ScrollToTop";
import Reviews from "./pages/reviews/Reviews";
import AddReview from "./pages/reviews/add-review";
import SchoolReviews from "./pages/reviews/school-reviews";

axios.defaults.baseURL = `${serverUrl}/api`;

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
        <Route path="/myexams" element={<ShowExam />}></Route>
        <Route path="/features" element={<AllFeatures />}></Route>
        <Route path="/account" element={<Account />}></Route>

        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/add-review" element={<AddReview />}></Route>
        <Route path="/school-reviews" element={<SchoolReviews />}></Route>

        <Route path="/dashboard/add-exam" element={<AddExam />}></Route>
        <Route path="/chooseExam" element={<MyExams />}></Route>
        <Route path="/schoolExams/:id" element={<SchoolExams />}></Route>
        <Route path="/school-exams" element={<ShowAllExams />}></Route>

        <Route path="/dashboard/add-sheet" element={<AddSheet />}></Route>
        <Route path="/chooseSheet" element={<Sheets />}></Route>
        <Route path="/schoolSheets/:id" element={<SchoolSheets />}></Route>
        <Route path="/school-sheets" element={<ShowAllSheets />}></Route>

        <Route path="/dashboard/add-board" element={<AddBoard />}></Route>
        <Route path="/blackboardsList" element={<BlackboardsList />}></Route>
        <Route path="/blackboardsList/:id" element={<SchoolBoards />}></Route>
        <Route path="/school-boards" element={<ShowAllBoards />}></Route>

        <Route path="/dashboard/add-video" element={<AddVideo />}></Route>
        <Route path="/video-list" element={<VideoList />}></Route>
        <Route path="/video-list/:id" element={<LessonVideo />}></Route>
        <Route path="/school-videos" element={<ShowAllVideos />}></Route>

        <Route path="/dashboard/add-audio" element={<AddAudio />}></Route>
        <Route path="/audio-list" element={<AudioList />}></Route>
        <Route path="/audio-list/:id" element={<LessonAudio />}></Route>
        <Route path="/school-audios" element={<ShowAllAudios />}></Route>

        <Route path="/dashboard/add-book" element={<AddBook />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/school-books" element={<ShowAllBooks />}></Route>

        <Route path="/dashboard/add-student" element={<AddStudent />}></Route>
        <Route path="/school-students" element={<ShowAllStudents />}></Route>

        <Route path="/dashboard/all-data" element={<ShowAllData />}></Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
