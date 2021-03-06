import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Navigation } from "swiper";
import Service from "./Service";
import AwesomeServiceDe from "../../Type/models";

const AwesomeService = () => {
  const [service, setService] = useState<AwesomeServiceDe[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="divider"></div>
      <div>
        <h2 className="text-2xl font-bold text-center">
          Provide awesome <span className="text-accent">services</span>
        </h2>
      </div>
      <div className="divider"></div>
      <div className="bg-base-300">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper py-5"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          {service.map((s) => (
            <SwiperSlide>
              <Service key={s._id} service={s}></Service>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AwesomeService;
