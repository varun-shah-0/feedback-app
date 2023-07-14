import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ data, handleClick }) => {
  if (!data || data.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <>
      {data.map((feedback, index) => {
        return <FeedbackItem data={feedback} handleCLick={handleClick} key={index} />;
      })}
    </>
  );
};

export default FeedbackList;
