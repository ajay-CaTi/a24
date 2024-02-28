import { Component } from "react";
import AboutClass from "./AboutClass";
// import Contact from "./Contact";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("constructor ABOUT");
    // debugger;
  }

  componentDidMount() {
    // console.log("componentDidMount About");
    // debugger;
  }

  componentDidUpdate() {
    // console.log("Parent comp UPDATE");
  }

  componentWillUnmount() {
    // console.log("Parent comp unmounting");
  }

  render() {
    // console.log("render ABOUT");
    // debugger;
    return (
      <div>
        <h1>About Hello</h1>

        <AboutClass location={"Earth"} work={"Developer"} />
        {/* <Contact name={"contact me"} /> */}
      </div>
    );
  }
}

// import React from "react";
// import AboutClass from "./AboutClass";

// const About = () => {
//   return (
//     <div>
//       <h1>Ajay kumar</h1>
{
  /* <AboutClass name={"ajay kumar"} location={"Earth"} work={"Developer"} />; */
}
//     </div>
//   );
// };

export default About;
