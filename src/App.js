import { useState } from "react";
import Header from "./components/Header";
import data from "./data.json";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

const App = () => {
  const [feedbackList, setFeedbackList] = useState(data);

  const handleClick = (id) => {
    setFeedbackList(feedbackList.filter((item) => item.id !== id));
  };
  const handleAdd = (newFeedback) => {
    setFeedbackList([newFeedback, ...feedbackList]);
  };
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats data={feedbackList} />
        <FeedbackForm handleAdd={handleAdd} />
        <FeedbackList data={feedbackList} handleClick={handleClick} />
      </div>
    </>
  );
};

export default App;
