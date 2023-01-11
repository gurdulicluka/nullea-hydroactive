import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import "./PageLoader.css";

const loaderAnimate = {
  offScreen: { opacity: 0 },
  onScreen: {
    opacity: [0, 1, 1, 1, 1, 0],
    transition: {
      duration: 2.8,
    },
  },
};

const PageLoader = () => {
  return createPortal(
    <motion.div
      className="page__loader"
      initial={"offScreen"}
      animate={"onScreen"}
      variants={loaderAnimate}
    >
      <div className="loader__wrapper">
        <div className="loader"></div>
        <span className="loader__text">Nullea</span>
      </div>
    </motion.div>,
    document.getElementById("overlays")
  );
};

export default PageLoader;
