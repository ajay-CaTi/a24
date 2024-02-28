import React, { useEffect } from "react";

const Contact = ({ name }) => {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("called after each second");
    }, 1000);
    console.log("useeffect");

    return () => {
      clearInterval(timer);
      console.log("useeffet returned");
    };
  }, []);
  console.log("render");
  return (
    <div>
      <h1>Contact</h1>
      {/* <p>{name}</p> */}
    </div>
  );
};

export default Contact;
