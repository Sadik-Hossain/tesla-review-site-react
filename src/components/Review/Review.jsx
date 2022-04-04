import React from "react";
import "./Review.css"
const Review = ({ review }) => {
  const { name, body, picture } = review;
  return (
    <div className="card">
      <div>
          <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>{body}</p>
      </div>
    </div>
  );
};

export default Review;
