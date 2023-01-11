import React from "react";
import { motion } from "framer-motion";
import { useScreen } from "../../util/hooks";

const Heading = (props) => {
  const { sm } = useScreen();

  const headingAnimate = {
    offScreen: { x: -100, opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: sm ? 0.7 : 0.4,
        opacity: { duration: sm ? 1 : 0.3, ease: "ease" },
      },
    },
  };

  return (
    <motion.h2
      className="heading"
      //   heading class in index sheet
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.7 }}
      variants={headingAnimate}
    >
      {props.children}
    </motion.h2>
  );
};

export default Heading;
