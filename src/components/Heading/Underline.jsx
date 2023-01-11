import React from "react";
import { motion } from "framer-motion";

const lineAnimate = {
  offScreen: { width: 0 },
  onScreen: {
    width: "100%",
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

const Underline = () => {
  return (
    <motion.div
      className="line"
      //   line class in index sheet
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.8 }}
      variants={lineAnimate}
    />
  );
};

export default Underline;
