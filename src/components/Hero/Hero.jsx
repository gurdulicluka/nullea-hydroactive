import React, { useEffect } from "react";
import "./Hero.css";
import { nulleaGreen, hands } from "../../assets";
import ErrorModal from "../ErrorModal/ErrorModal";
import { useModal } from "../../util/hooks";

const Hero = () => {
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [isOpen]);

  return (
    <section className="hero">
      <div className="hero__wrapper animated">
        <div className="hero__logo">
          <img src={nulleaGreen} alt="nullea logo" width="535" height="156" />
        </div>
        <div className="hero__hands">
          <img
            src={hands}
            alt="hands applying cream"
            width="630"
            height="350"
          />
        </div>
      </div>
      <button onClick={openModal} className="hero__button">
        Our Products
      </button>
      {isOpen && <ErrorModal close={closeModal} />}
    </section>
  );
};

export default Hero;
