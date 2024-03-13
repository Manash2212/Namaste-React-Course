// import React, { useEffect } from "react";
// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5867597&lng=88.4149401&restaurantId=10365&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     console.log(json);
//   };

//   return (
//     <div className="about-container">
//       <h1>This is Namaste React Course Episode - 8</h1>
//       <User name={"Manash Halder from Function 💥"} />
//       <UserClass name={"Sohom Halder from Class 💥"} />
//     </div>
//   );
// };

// export default About;
import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Prent Constructor Called");
  }

  componentDidMount() {
    console.log("Prent componentDidMount is Called");
  }
  render() {
    console.log("Prent Render is Called");
    return (
      <div className="about-container">
        <h1>Thi is made by Class Based Component</h1>
        <h1>This is Namaste React Course Episode - 8</h1>
        <div className="">
          <h2>User : </h2>
          <UserContext.Consumer>
            {" "}
            //This is a Component--In this Component i define a callback
            function
            {({ loggedInUser }) => console.log(loggedInUser)}
          </UserContext.Consumer>
        </div>
        <UserClass name={"First Child 💥"} />
        {/* <UserClass name={"Second Child from Class 💥"} /> */}
      </div>
    );
  }
}
export default About;
