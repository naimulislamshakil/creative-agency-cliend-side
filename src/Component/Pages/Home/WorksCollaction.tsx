import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./WorkCollaction.css";

// import required modules
import { Pagination } from "swiper";

import WorkCollactionCard from "./WorkCollactionCard";
import AwesomeServiceDe from "../../Type/models";

const WorksCollaction = () => {
  const [imgs, setImg] = useState<AwesomeServiceDe[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/works")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  return (
    <div className="mt-5">
      <div className="divider"></div>
      <div>
        <h2 className="text-2xl font-bold text-center">
          Here are some of
          <span className="text-accent"> our works</span>
        </h2>
      </div>
      <div className="divider"></div>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper my-5 bg-black"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {imgs.map((img) => (
          <SwiperSlide className="my-8">
            <WorkCollactionCard key={img._id} image={img}></WorkCollactionCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorksCollaction;
