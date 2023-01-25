import React from "react";
import "../App.css";
import Button from "./Button";

const Modal = (props) => {

  return (
    // Open Modal
    <div id="myModal" className="modal">
      {/* Modal content */}
      <div className="modal-content">
        <label>How many people are getting drunk?</label>
        <Button btnName="Close" btnFunc={props.closeBtn} />
      </div>
    </div>
  );
};

export default Modal;
