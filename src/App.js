import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem/";
import data from "./data.json";
import axios from "axios";
import { useEffect } from "react";

const name = "Feedback React App";

const App = () => {
  console.log(data);
  useEffect(() => {
    // async function fetchData() {
    //   // You can await here
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    //   // ...
    //   console.log(await response.json());
    // }
    //fetchData();
    console.log("123");
  }, []);
  return (
    <>
      <Header />
      {data.map((feedback, index) => {
        return <FeedbackItem data={feedback} key={index} />;
      })}
    </>
  );
};

export default App;
