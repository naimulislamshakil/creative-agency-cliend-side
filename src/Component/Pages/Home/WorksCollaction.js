import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Navigation } from "swiper";
import WorkCollactionCard from "./WorkCollactionCard";

const WorksCollaction = () => {
  const [imgs, setImg] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/works")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  return (
    <div className="mt-5">
      <div class="divider"></div>
      <div>
        <h2 className="text-2xl font-bold text-center">
          Here are some of
          <span className="text-accent"> our works</span>
        </h2>
      </div>
      <div class="divider"></div>
      <div className="bg-base-300">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={2}
        >
          <div className="py-5">
            {imgs.map((img) => (
              <SwiperSlide>
                <WorkCollactionCard
                  key={img._id}
                  img={img}
                ></WorkCollactionCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default WorksCollaction;
