import { useState } from "react";

const FeedbackItem = ({ data }) => {
  // const [rating, setRating] = useState(7);
  // const [ratingText, setRatingText] = useState("This is feedback item");

  // const btnClickHandler = (e) => {
  //   console.log(e);
  //   setRating((prev) => {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  //   setRatingText("Button clicked" + rating);
  // };

  return (
    <div className='container'>
      <div
        className='card'
        style={{
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        <div className='num-display'>{data.rating}</div>
        <div className='text-display'>{data.text}</div>
        {/* <button onClick={btnClickHandler}>click me</button> */}
      </div>
    </div>
  );
};

export default FeedbackItem;
