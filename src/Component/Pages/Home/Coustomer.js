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
      <div className="mx-auto bg-white grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 justify-center py-5 w-full items-center">
        <img className="w-3/4 mt-2 mx-auto" src={sl} alt="" />
        <img className="w-3/4 mt-4 mx-auto" src={google} alt="" />
        <img className="w-3/4 mt-2 mx-auto" src={uber} alt="" />
        <img className="w-3/4 mt-2 mx-auto" src={netflix} alt="" />
        <img className="w-3/4 mt-2 mx-auto" src={airbnb} alt="" />
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default Coustomer;
