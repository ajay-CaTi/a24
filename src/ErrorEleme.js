import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorEleme = () => {
  let { status, statusText } = useRouteError();
  console.log(status, statusText);
  return (
    <div>
      <h1>
        {status} {statusText}
      </h1>
    </div>
  );
};

export default ErrorEleme;
