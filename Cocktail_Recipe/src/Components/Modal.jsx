import React from "react";
import "../App.css";
import Button from "./Button";

const Modal = (props) => {
  const ingredient = [];
  const measurement = [];

  for (let i = 1; i <= 15; i++) {
    const defaultName = "strIngredient";
    const name = defaultName + i;
    if (props.drink[name]) {
      console.log(props.drink[name]);
    }
  }

  // const ingre = props.drink.map((item,id)=()=>{
  //     return (
  //         <div>

  //         </div>
  //     )
  // })
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
