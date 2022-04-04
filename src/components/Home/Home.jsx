import React from "react";
import "./Home.css";
const url = `https://www.tesla.com/ownersmanual/images/GUID-999EC68D-FD44-4237-8AB8-AB97A724F3B0-online-en-US.png`;
const Home = () => {
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
      <section className="review-section">
        <h1>Top Reviews</h1>
      </section>
    </div>
  );
};

export default Home;
