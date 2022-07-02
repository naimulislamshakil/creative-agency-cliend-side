import React from "react";
import CollactionDetils from "../../Type/models3";

interface ImageType {
  image: CollactionDetils;
}
const WorkCollactionCard = ({ image }: ImageType) => {
  const { img } = image;
  return (
    <div className="card w-80  bg-base-100 shadow-2xl">
      <figure>
        <img src={img} alt="" className="w-1/4" />
      </figure>
    </div>
  );
};

export default WorkCollactionCard;
