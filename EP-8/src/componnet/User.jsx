import React, { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-container">
      <h1>Name :- {name}</h1>
      <h2>Count = {count}</h2>
      <h2>Role :- Front End Developer</h2>
      <h2>Location :- Sonarpur, Kolkata - 700150</h2>
    </div>
  );
};

export default User;
