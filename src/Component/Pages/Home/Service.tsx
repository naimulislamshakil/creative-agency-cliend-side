import React from "react";

const Service = ({ service }) => {
  const { img, titel, text } = service;
  return (
    <div>
      <div className="card card-compact w-80 lg:w-96 bg-base-100 shadow-2xl">
        <figure>
          <img className="img_width mt-3" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{titel}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
