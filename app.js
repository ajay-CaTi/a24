let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "subChild" }, "i am sub child"),
    React.createElement("h1", { id: "subChild2" }, "i am sub child2"),
  ])
);

let heading = React.createElement("h2", { id: "hello", key: 2 }, "Hello React");
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// console.log(heading);
// console.log(root);
