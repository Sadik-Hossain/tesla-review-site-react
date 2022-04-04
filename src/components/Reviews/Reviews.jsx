import React from "react";
import getReviews from "../../hooks/getReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [comments, setComments] = getReviews();

  return (
    <div className="review-section">
      {comments.map((comment) => (
          <Review review={comment} key={comment._id} />
        ))}
    </div>
  );
};

export default Reviews;
