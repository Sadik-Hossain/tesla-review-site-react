import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Review.css";
const Review = ({ review }) => {
  const { name, body, picture } = review;
  return (
    <div className="card">
      <div>
        <div className="card-img">
          <img src={picture} alt="" />
        </div>
        <h3>{name}</h3>
        <q>{body}</q>
     <div className="rating-section">
     <small style={{fontWeight:"500"}} >Ratings: </small>
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "gold" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "gold" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "gold" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "gold" }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          style={{ color: "gold" }}
        ></FontAwesomeIcon>
     </div>
       
      </div>
    </div>
  );
};

export default Review;
