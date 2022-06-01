import React from "react";
import banner from "../../../images/logos/Frame.png";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-primary mt-2">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} class="max-w-sm w-3/4" alt="" />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
