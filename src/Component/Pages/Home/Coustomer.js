import React from "react";

const Coustomer = () => {
  return (
    <div>
      <div class="divider divider-horizontal">OR</div>
      <div className="text-center bg-black grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-center py-5 w-full items-center">
        <img src={freelancer} alt="" />
        <img src={fiverr} alt="" />
        <img src={upwork} alt="" />
        <img src={dribbble} alt="" />
        <img src={behance} alt="" />
      </div>
      <div class="divider divider-horizontal">OR</div>
    </div>
  );
};

export default Coustomer;
