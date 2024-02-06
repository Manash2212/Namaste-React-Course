import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(`${this.props.name} Constructor is Called`);

    this.state = {
      count: 0,
      count2: 0,
      // here i Have created userInfo State to display the user data to the DOM
      userInfo: {
        // We Have to declare Some Initial Valur TO the userInfo
        name: "My Name",
        avatar_url: "htp::/static",
        type: "anyhting",
      },
    };
  }
  async componentDidMount() {
    console.log(`${this.props.name}Child componentDidMount is Called`);
    const data = await fetch("https://api.github.com/users/Manash2212");
    const json = await data.json();
    console.log(json);

    // Ater Declaring the State at the top, and here i have to pass the json Data to the userInfo.
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("The componentDidUpdate Successfully");
  }

  // componentDidMount(){
  //   console.log("componentDidMount Successfully");
  // }

  componentWillUnmount() {
    console.log("componentWillUnmount Successfully");
  }
  render() {
    console.log(`${this.props.name} Render is Called`);

    // Destructuring the Object
    // const { name } = this.props;

    const { name, avatar_url } = this.state.userInfo;
    // debugger;

    return (
      <div className="user-container">
        <img src={avatar_url} alt="my Img" />
        <h1>Name : {name}</h1>
        {/* <button
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
            if (this.state.count && this.state.count2 === 0) {
              this.setState({
                count: this.state.count,
                count2: this.state.count,
              });
            } else {
              this.setState({
                count: this.state.count - 1,
                count2: this.state.count2 - 1,
              });
            }
          }}
        >
          Count Decrease
        </button> */}
        <h2>Role : FullStack Developer</h2>
        <h2>Location : Sonarpur, Kolkata - 700150</h2>
      </div>
    );
  }
}

export default UserClass;
