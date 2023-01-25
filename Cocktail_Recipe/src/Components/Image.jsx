import React, { useState } from "react";
import Modal from "./Modal";

const Image = (props) => {
  const [click, setClick] = useState(false);

  const imgClick = () => {
    setClick(true);
  };

  const closeClick = () => {
    setClick(false);
  };

  return (
    <div className="drink">
      <label>{props.drink.strDrink}</label>
      <img src={props.drink.strDrinkThumb} onClick={imgClick}></img>
      {click && <Modal closeBtn={closeClick} drink={props.drink}/>}
      {/* {console.log(props.drink)} */}
    </div>
  );
};

export default Image;
