import React from "react";

const Service = ({ service }) => {
  const { img, titel, text } = service;
  return (
    <div>
      <div class="card card-compact w-96 bg-base-100 shadow-2xl">
        <figure>
          <img className="img_width mt-3" src={img} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title justify-center">{titel}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
