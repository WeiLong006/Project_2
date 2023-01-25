import React from "react";
import "../App.css";
import Button from "./Button";

const Modal = (props) => {
  return (
    // Open Modal
    <div id="myModal" className="modal">
      {/* Modal content */}
      <div className="modal-content">
        <label>{props.drink.strIngredient1}</label>
        {console.log(props.drink)}
        <Button btnName="Close" btnFunc={props.closeBtn} />
      </div>
    </div>
  );
};

export default Modal;
