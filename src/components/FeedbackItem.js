import { FaTimes } from "react-icons/fa";
import Card from "./Card";

const FeedbackItem = ({ data, handleCLick }) => {
  // const handleDelete = () => {
  //   console.log(data.id);
  // };
  return (
    <div className='container'>
      <Card>
        <div className='num-display'>{data.rating}</div>
        <div className='text-display'>{data.text}</div>
        <button onClick={() => handleCLick(data.id)} className='close'>
          <FaTimes color='purple' />
        </button>
      </Card>
    </div>
  );
};

export default FeedbackItem;
