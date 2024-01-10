import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Child Constructor is Called");

    this.state = {
      count: 0,
      count2: 0,
    };
  }
  componentDidMount() {
    console.log("Child componentDidMount is Called");
  }
  render() {
    console.log("Child Render is Called");

    // Destructuring the Object
    const { name } = this.props;

    const { count, count2 } = this.state;

    return (
      <div className="user-container">
        <h1>Name : {name}</h1>
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
        <button
          onClick={() => {
            // this.setState({}) always takes an object.
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
              count2: this.state.count2 - 1,
            });

            if (this.state.count && this.state.count2 === 0) {
              this.setState({
                count: this.state.count,
                count2: this.state.count,
              });
            }
          }}
        >
          Count Decrease
        </button>
        <h2>Role : FullStack Developer</h2>
        <h2>Location : Sonarpur, Kolkata - 700150</h2>
      </div>
    );
  }
}

export default UserClass;
