import React from "react";

const ReviewCard = ({ review }) => {
  const { img, position, company, text, name } = review;
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800  w-3/4 mx-auto justify-center	items-center">
        <img
          class="w-10  lg:w-1/4 md:rounded-none rounded-full mx-auto"
          src={img}
          alt=""
        />
        <div class="pt-6 md:p-8 text-white text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">“{text}”</p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">{name}</div>
            <div class="text-slate-700 dark:text-slate-500">
              {position}, {company}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default ReviewCard;
