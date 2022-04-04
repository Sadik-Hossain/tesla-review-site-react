import { useState, useEffect } from "react";

const getReviews = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`review.json`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return [comments, setComments];
};
export default getReviews ;
