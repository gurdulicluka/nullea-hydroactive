import React from "react";
import "./SingleReview.css";
import { motion } from "framer-motion";
import { useScreen } from "../../util/hooks";

const SingleReview = ({ name, title, image, content }) => {
  const { sm } = useScreen();

  const cardAnimate = {
    offScreen: { x: name.includes("Tessa") ? "-40%" : "40%", opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 2.2 },
    },
  };

  const cardAnimateMobile = {
    offScreen: { y: 100, opacity: 0, scale: 0.9 },
    onScreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.3, duration: 1.2 },
    },
  };

  return (
    <motion.div
      className="review__card"
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: sm ? 0.3 : 0.5 }}
      variants={sm ? cardAnimateMobile : cardAnimate}
    >
      <div className="review__text">
        <p className="review__content text">
          <q>{content}</q>
        </p>
        <div className="review__info">
          <p className="review__person text__small">{name}</p>
          <p className="review__title">{title}</p>
        </div>
      </div>
      <div className="review__image">
        <img src={image} alt="review image" />
      </div>
    </motion.div>
  );
};

export default SingleReview;
