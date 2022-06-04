import React from "react";

const WorkCollactionCard = ({ img }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-2xl">
      <figure>
        <img src={img.img} alt="" className="w-1/4" />
      </figure>
    </div>
  );
};

export default WorkCollactionCard;
