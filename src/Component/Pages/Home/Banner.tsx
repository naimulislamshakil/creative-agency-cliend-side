import React from "react";
import banner from "../../../images/logos/Frame.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-primary">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="max-w-sm w-3/4" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
