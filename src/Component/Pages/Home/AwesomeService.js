import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import { Navigation } from "swiper";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";
import service4 from "../../../images/icons/service4.png";
import service5 from "../../../images/icons/service5.png";

const AwesomeService = () => {
  return (
    <div>
      <div class="divider"></div>
      <div>
        <h2 className="text-2xl font-bold text-center">
          Provide awesome <span className="text-accent">services</span>
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
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img className="img_width mt-3" src={service1} alt="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title justify-center">Web & Mobile design</h2>
                <p>
                  We craft stunning and amazing web UI, using a well drrafted UX
                  to fit your product.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img className="img_width mt-3" src={service2} alt="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title justify-center">Graphic design</h2>
                <p>
                  Amazing flyers, social media posts and brand representations
                  that would make your brand stand out.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img className="img_width mt-3" src={service3} alt="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title justify-center">Web development</h2>
                <p>
                  With well written codes, we build amazing apps for all
                  platforms, mobile and web apps in general.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img className="img_width mt-3" src={service4} alt="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title justify-center">Graphic design</h2>
                <p>
                  Amazing flyers, social media posts and brand representations
                  that would make your brand stand out.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-2xl">
              <figure>
                <img className="img_width mt-3" src={service5} alt="" />
              </figure>
              <div class="card-body">
                <h2 class="card-title justify-center">Web & Mobile design</h2>
                <p>
                  We craft stunning and amazing web UI, using a well drrafted UX
                  to fit your product.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AwesomeService;
