import logo from "./logo.svg";
import "./App.css";
// import React from "react";

function App() {
  //scope of let & var
  // function testVar() {
  //   var a = 30;
  //   if (true) {
  //     var a = 50;
  //     console.log(a);
  //   }
  //   console.log(a);
  // }
  // testVar();
  // function testLet() {
  //   let a = 30;
  //   if (true) {
  //     let a = 50;
  //     console.log(a);
  //   }
  //   console.log(a);
  // }
  // testLet();

  // let theString = "Hello, my name is Varun and I code in JS";

  // startsWith()
  // endsWith()
  // includes()

  // console.log(theString.startsWith("Hello"));
  // console.log(theString.endsWith("JavaScript"));
  // console.log(theString.includes("code"));

  // console.log(theString.indexOf("code"));

  // function greet($greeting = "Hello World") {
  //   console.log($greeting);
  // }

  // greet("Hello there...");
  // greet();

  //array destructuring and spread oprator

  //   const numbers = [1, 2, 3, 4, 5, 6];
  // const one1 = numbers[0]
  // const two2 = numbers[0]
  // const [one, two, ...rest] = numbers;

  // const myVehicle = {
  // brand: 'Kia',
  // model: 'Sonet',
  // color: 'black'
  // }

  // const updateMyVehicle = {
  // type: 'car',
  // year: 2021,
  // color: 'pearl lack'
  // }

  // const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  //arrow functions
  // let addF = function(a,b){
  //   let sum = a+b;
  //   console.log(sum);
  //   return false;
  // }
  // addF(10,2);

  // let add = (a,b) => {
  //   let sum = a+b;
  //   console.log(sum);
  //   return false;
  // }

  // add(10,2);

  //  return React.createElement("div", { className: "App" },
  //     React.createElement("h1", {}, "My React App"));

  const title = "My React App";
  const body = "Here, we'll create react application";

  const style = { color: "teal" };

  const comments = [
    { id: 1, text: "Comment One" },
    { id: 2, text: "Comment Two" },
    { id: 3, text: "Comment Three" },
  ];

  const showComments = false;
  const ShowLoader = false;
  return (
    //ClassName instead of Class
    // <label htmlFor='id'>Label 1</label>

    // <>
    <div className='App'>
      <h1 className='teal'>My React App</h1>
      <p>Here, we'll create react application</p>

      {/* <h2> Comments ({comments.length})</h2>
      <ul>
        <li> {comments[0].text}</li>
        <li>{comments[1].text}</li>
        <li>{comments[2].text}</li>
      </ul> */}

      {/* {showComments && ( */}
      {/* <ul>
        {comments.map((comment, index) => {
          return <li key={index}>{comment.text}</li>;
        })}
      </ul> */}
      {/* )} */}

      {/* {ShowLoader ? 'yes' : 'no'} */}
    </div>

    //<p>second paragraph here</p>
    // </>

    //apply styles to component
    //style={{ color: "teal" }}  style={style} className='teal'

    // <div className='App'>
    // <h1>{title.toUpperCase()}</h1>
    //   <p>{body}</p>
    // </div>
  );
}

export default App;
