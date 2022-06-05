import React, { useEffect, useState } from "react";

const Review = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tastmonial")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="mt-5">
      <div class="divider"></div>
      <div>
        <h2 className="text-2xl font-bold text-center">
          Clients
          <span className="text-accent"> Feedback</span>
        </h2>
      </div>
      <div class="divider"></div>
    </div>
  );
};

export default Review;
