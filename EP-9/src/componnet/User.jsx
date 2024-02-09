import React, { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-container">
      <h1>Name :- {name}</h1>
      <h2>Count = {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
          if (count <= 0) {
            setCount(count);
          }
        }}
      >
        Count Decrease
      </button>
      <h2>Role :- Front End Developer</h2>
      <h2>Location :- Sonarpur, Kolkata - 700150</h2>
    </div>
  );
};

export default User;
