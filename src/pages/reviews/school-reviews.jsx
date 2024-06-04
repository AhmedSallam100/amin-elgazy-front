import React, { useEffect, useState } from "react";
import "./review.css";
import axios from "axios";
import { Button } from "./Reviews";
import { toast } from "react-toastify";

const SchoolReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/reviews");
        setReviews(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, []);

  const handleDelete = async (e, reviewId) => {
    e.preventDefault();
    try {
      await axios.delete(`/reviews/${reviewId}`);
      setReviews(reviews.filter((review) => review._id !== reviewId));
      toast.success("تم الحذف بنجاح");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        toast.error("حدث خطأ اثناء العملية. يرجى المحاولة مرة اخرى.");
      } else {
        console.log("Error", error.message);
        toast.error("حدث خطأ اثناء العملية. يرجى المحاولة مرة اخرى.");
      }
    }
  };

  return (
    <div className="all-reviews">
      <div className="container">
        {reviews.length === 0 && (
          <div className="no-exam-message">
            <i className="uil uil-exclamation-triangle"></i>
            <h1>لا يوجد تقييمات حتي الان</h1>
            <Button text="جميع البيانات" path={`/all-data`} />
          </div>
        )}
        <div className="review-boxes">
          {reviews.map((review) => (
            <div className="review-box">
              <i
                className="uil uil-trash-alt delete-review"
                onClick={(e) => handleDelete(e, review._id)}
              ></i>
              <img
                src="https://aminelgazy.mathjewel.com/avatar-1.png"
                alt="طالب"
              />
              <div className="reviewer-data">
                <span>{review.name}</span>
                <span>{review.phone}</span>
              </div>
              <hr />
              <p className="review-message">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolReviews;
