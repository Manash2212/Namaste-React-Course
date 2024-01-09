import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    // Destructuring the Object
    const { name } = this.props;

    const { count, count2 } = this.state;

    return (
      <div className="user-container">
        <h1>Name : {name}</h1>
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
        <h2>Role : FullStack Developer</h2>
        <h2>Location : Sonarpur, Kolkata - 700150</h2>
      </div>
    );
  }
}

export default UserClass;
