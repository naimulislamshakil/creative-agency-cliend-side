import React from "react";
import ReviewDetils from "../../Type/models2";
interface ReviewName {
  review: ReviewDetils;
}
const ReviewCard = ({ review }: ReviewName) => {
  const { img, position, company, text, name } = review;
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800  w-3/4 mx-auto justify-center	items-center">
        <img
          className="w-10  lg:w-1/4 md:rounded-none rounded-full mx-auto"
          src={img}
          alt=""
        />
        <div className="pt-6 md:p-8 text-white text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">“{text}”</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {position}, {company}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default ReviewCard;
