import React from "react";
import sl from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";

const Coustomer = () => {
  return (
    <div>
      <div class="divider"></div>
      <div className=" text-center bg-white grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 justify-center py-5 w-full items-center">
        <img className="w-3/4 mt-2" src={sl} alt="" />
        <img className="w-3/4 mt-2" src={google} alt="" />
        <img className="w-3/4 mt-2" src={uber} alt="" />
        <img className="w-3/4 mt-2" src={netflix} alt="" />
        <img className="w-3/4 mt-2" src={airbnb} alt="" />
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default Coustomer;
