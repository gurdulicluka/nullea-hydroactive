import React from "react";
import { createPortal } from "react-dom";
import "./ErrorModal.css";

const ErrorModal = ({ close }) => {
  return createPortal(
    <div className="modal__backdrop" onClick={close}>
      <div
        className="modal__container"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__btn" onClick={close}>
          <span className="xline"></span>
          <span className="xlinetwo"></span>
        </button>
        <p className="modal__msg">
          Unfortunately, this link <br /> goes nowhere for now!
        </p>
        <p className="sadface">{":-("}</p>
      </div>
    </div>,
    document.getElementById("overlays")
  );
};

export default ErrorModal;
