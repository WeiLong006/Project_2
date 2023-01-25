import React from "react";

const Image = (props) => {
  return (
    <div className="drink">
      <label>{props.imageName}</label>
      <img src={props.imageSrc}></img>
    </div>
  );
};

export default Image;
