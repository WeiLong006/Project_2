import React from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.btnFunc}>{props.btnName}</button>
    </>
  );
};

export default Button;
