import React, { useState } from "react";

// 2nd type

const AccComp = () => {
  const [show, setShow] = useState(0);
  const toggle = (i) => {
    if (i === show) {
      setShow(-1);
      return;
    } else {
      setShow(i);
    }
  };
  return (
    <div
      style={{
        width: "80vw",
        height: "80vh",
        backgroundColor: "grey",
        margin: "auto",
        textAlign: "center",
      }}
    >
      {data.map((val) => {
        return (
          <div key={val.id}>
            <div id={val.id} onClick={() => toggle(val.id)}>
              <h1
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  backgroundColor: "white",
                  height: "50px",
                }}
              >
                {val.a} {show == val.id ? "-" : " ➕"}
              </h1>
            </div>
            <div>
              {show == val.id && <p style={{ fontSize: "17px" }}>{val.d1}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

let data = [
  {
    id: 1,
    a: "aman",
    d1: "lorem1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
  },
  {
    id: 2,
    a: "manan",
    d1: "lorem2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
  },
  {
    id: 3,
    a: "sunny",
    d1: "lorem3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
  },
  {
    id: 4,
    a: "monty",
    d1: "lorem4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
  },
  {
    id: 5,
    a: "karan",
    d1: "lorem5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
  },
];

export default AccComp;

// const AccComp = () => {
//   const [show, setShow] = useState(null);
//   const toggle = (i) => {
//     if (show == i) {
//       return setShow(null);
//     } else {
//       setShow(i);
//     }
//   };
//   return (
//     <div
//       style={{
//         width: "80vw",
//         height: "80vh",
//         backgroundColor: "grey",
//         margin: "auto",
//         textAlign: "center",
//       }}
//     >
//       {data.map((val, i) => {
//         return (
//           <div key={i}>
//             <div onClick={() => toggle(i)}>
//               <h1
//                 style={{
//                   fontSize: "25px",
//                   cursor: "pointer",
//                   backgroundColor: "white",
//                   height: "50px",
//                 }}
//               >
//                 {val.a} {show == i ? "-" : " ➕"}
//               </h1>
//             </div>
//             <div className={show == i ? "ssa" : "dd"}>
//               <p style={{ fontSize: "17px" }}>{val.d1}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// let data = [
//   {
//     a: "aman",
//     d1: "lorem1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
//   },
//   {
//     a: "manan",
//     d1: "lorem2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
//   },
//   {
//     a: "sunny",
//     d1: "lorem3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
//   },
//   {
//     a: "monty",
//     d1: "lorem4 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
//   },
//   {
//     a: "karan",
//     d1: "lorem5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nostrum.",
//   },
// ];

// export default AccComp;
