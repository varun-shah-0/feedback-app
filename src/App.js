import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
//components
import Header from "./components/Header";
import data from "./data.json";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./pages/Post";
import Card from "./components/Card";

const App = () => {
  console.log(window.location);
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
        <Router>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackStats data={feedbackList} />
                  <FeedbackForm handleAdd={handleAdd} />
                  <FeedbackList data={feedbackList} handleClick={handleClick} />
                </>
              }
            />

            <Route path='/about' element={<AboutPage />} />
            <Route path='/post/:id' element={<Post />} />
          </Routes>
          <Card>
            <NavLink to='/' activaClassName='active'>
              Home
            </NavLink>
            <NavLink to='/about' activaClassName='active'>
              About
            </NavLink>
          </Card>
          <AboutIconLink />
        </Router>
      </div>
    </>
  );
};

export default App;
