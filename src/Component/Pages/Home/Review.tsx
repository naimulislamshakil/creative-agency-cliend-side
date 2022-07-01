import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./WorkCollaction.css";

// import required modules
import { Pagination } from "swiper";

const Review = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tastmonial")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="divider"></div>
      <div>
        <h2 className="text-2xl font-bold text-center">
          Clients
          <span className="text-accent"> Feedback</span>
        </h2>
      </div>
      <div className="divider"></div>
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper my-5 bg-base-200"
          slidesPerView="1"
        >
          {reviews.map((r) => (
            <SwiperSlide>
              <ReviewCard key={r._id} review={r}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
