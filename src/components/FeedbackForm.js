import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RatingSelect from "./RatingSelect";
import Button from "./Button";
import Card from "./Card";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [isDisabled, setisDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    var textVal = e.target.value;
    if (textVal === "") {
      setisDisabled(true);
      setMessage(null);
    } else if (textVal !== "" && textVal.trim().length <= 10) {
      setisDisabled(true);
      setMessage("text must be at least 10 characters");
    } else {
      setisDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: uuidv4(),
      text,
      rating,
    };
    handleAdd(newFeedback);
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate your Feedback</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input value={text} onChange={handleTextChange} type='text' placeholder='write a review' />
          <Button type='submit' isDisabled={isDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
