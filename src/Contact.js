import React, { useEffect } from "react";

const Contact = ({ name }) => {
  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     console.log("called after each second");
  //   }, 1000);
  //   console.log("useeffect");

  //   return () => {
  //     clearInterval(timer);
  //     console.log("useeffet returned");
  //   };
  // }, []);
  console.log("render");
  return (
    <div>
      <h1 className="font-bold text-center">Contact</h1>
      {/* <p>{name}</p> */}
      <form className="text-center flex flex-col align-middle items-center">
        <input
          className=" w-10/12 rounded-md p-2"
          type="text"
          name="name"
          placeholder="name"
          id=""
        />
        <textarea
          className=" w-10/12 rounded-md p-2 m-2"
          name="message"
          id=""
          placeholder="message"
          cols="30"
          rows="5"
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="bg-blue-200 px-1 rounded-md w-8/12 p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
