import React from "react";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? body : <p>This is our Modal body</p>}
        </div>
        <div className="footer">
          {footer ? footer : <h2>This is our footer</h2>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
