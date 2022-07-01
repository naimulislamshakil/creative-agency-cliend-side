import React, { FC } from "react";
import AwesomeServiceDe from "../../Type/models";

interface ImageType {
  image: AwesomeServiceDe;
}
const WorkCollactionCard: FC<ImageType> = ({ image }) => {
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
