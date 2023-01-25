import React from "react";
import "../App.css";

const Modal = () => {
  return (
    // Open Modal
    <div id="myModal" className="modal">
      {/* Modal content */}
      <div class="modal-content">
        <span className="close">&times;</span>
        <label>How many people are getting drunk?</label>
        <button id="submit">Submit</button>
      </div>
    </div>
  );
};

export default Modal;
