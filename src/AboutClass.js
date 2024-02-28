import React from "react";
// import { git_API } from "../utils/data";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        avatar_url: "htttps://dummy.com",
        bio: "dummy",
        login: "dummy",
        public_repos: 50,
      },
    };

    // console.log(props);
    // console.log("CONSTRUCTOR child");
    // debugger;
  }

  async componentDidMount() {
    // const data = await fetch(git_API);
    // const json = await data.json();
    // console.log(json);
    // console.log(`componentDidMount child ${this.props.id}`);
    // // debugger;
    // this.setState({
    //   userInfo: json,
    // });
    // this.timer = setInterval(() => {
    //   console.log("calling after each second");
    // }, 1000);
  }

  componentDidUpdate() {
    // console.log("Child comp UPDATE");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("Child comp unmounting");
  }

  render() {
    let { work, location } = this.props;
    // console.log("RENDER child");
    // debugger;
    return (
      <div>
        <h1>
          {this.state.userInfo.name} - {this.state.userInfo.id}
        </h1>
        <img src={this.state.userInfo.avatar_url} width={"200px"} alt="avtar" />
        <h3>{this.state.userInfo.bio}</h3>
        <h3>{this.state.userInfo.public_repos}</h3>

        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>

        <h1>{location}</h1>
        <h1>{work}</h1>
      </div>
    );
  }
}
export default AboutClass;
