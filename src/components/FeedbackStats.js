const FeedbackStats = ({ data }) => {
  const average = data.reduce((acc, item) => acc + item.rating, 0) / data.length;
  return (
    <div className='feedback-stats'>
      <h4>{data.length} Reviews</h4>
      <h4>Average rating : {average}</h4>
    </div>
  );
};

export default FeedbackStats;
