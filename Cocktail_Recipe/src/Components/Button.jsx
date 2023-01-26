import React from "react";

const Button = (props) => {
  return (
    <>
      <button className={props.className} onClick={props.btnFunc}>
        {props.btnName}
      </button>
    </>
  );
};

export default Button;
