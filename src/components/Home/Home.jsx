import React from "react";
import getReviews from "../../hooks/getReviews";
import Review from "../Review/Review";
import "./Home.css";
const url = `https://www.tesla.com/ownersmanual/images/GUID-999EC68D-FD44-4237-8AB8-AB97A724F3B0-online-en-US.png`;
const Home = () => {
  const [comments, setComments] = getReviews();

  return (
    <div>
      <div className="home-container">
        <div className="car-info">
          <h1 className="title">Tesla Model X review</h1>
          <p>
            The Tesla Model X is a full-sized all-electric crossover SUV made by
            Tesla Motors that uses falcon wing doors for access to the second
            and third row seats. The prototype was unveiled at Tesla design
            studios in Los Angeles on February 9, 2012.
          </p>
          <button>Load More</button>
        </div>
        <img src={url} alt="" />
      </div>
      <h1 style={{ textAlign: "center" }}>Top Reviews</h1>
      <section className="review-section">
        {comments.map((comment) => (
          <Review review={comment} key={comment._id} />
        ))}
      </section>
      <div style={{ textAlign: "center" }}>
        <button>See All Review</button>
      </div>
    </div>
  );
};

export default Home;
