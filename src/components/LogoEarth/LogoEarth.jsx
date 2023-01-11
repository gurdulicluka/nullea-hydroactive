import React from "react";
import { motion } from "framer-motion";
import "./LogoEarth.css";
import { nulleaBrown, earth, earthNormal } from "../../assets";

const earthFadeAnimate = {
  offScreen: { opacity: 1 },
  onScreen: {
    opacity: 0,
    transition: { delay: 0.6, type: "tween", duration: 1 },
  },
};
const textAnimate = {
  offScreen: { scale: 1 },
  onScreen: {
    scale: 1.6,
    transition: {
      delay: 1,
      type: "tween",
      duration: 1.2,
      ease: "anticipate",
    },
  },
};

const LogoEarth = () => {
  return (
    <div className="nullea__logo--wrapper">
      <motion.img
        className="nulleaCircle"
        src={nulleaBrown}
        alt="nullea logo"
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.6 }}
        variants={textAnimate}
      />
      <motion.img
        className="earth"
        src={earth}
        alt="earth sepia"
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.7 }}
        variants={earthFadeAnimate}
      />
      <img className="earthNormal" src={earthNormal} alt="earth" />
    </div>
  );
};

export default LogoEarth;
