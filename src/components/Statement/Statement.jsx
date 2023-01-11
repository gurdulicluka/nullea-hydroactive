import React from "react";
import "./Statement.css";
import { mintleaf } from "../../assets";
import Heading from "../Heading/Heading";
import Underline from "../Heading/Underline";

const Statement = () => {
  return (
    <section id="products" className="statement">
      <div>
        <Heading>All Natural Ingredients </Heading>
        <Underline />
      </div>
      <div className="statement__content--wrapper">
        <div className="statement__content">
          <p className="text">
            Nullea hydroactive creams are made with the same amount of care and
            science to ensure a natural and effective way to keep your skin
            healthy and UV protected. We are also the first Croatian skincare
            company to receive accolades at the Integro Health awards, winning
            over many prior - established brands.
          </p>
          <div className="nullea__bottle">
            <img
              src={mintleaf}
              alt="nullea mint bottle"
              width="395"
              height="325"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
