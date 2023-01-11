import React from "react";
import "./Cta.css";
import Form from "../Form/Form";
import { instagram, facebook, tiktok } from "../../assets";

const Cta = () => {
  return (
    <section className="cta">
      <h2 className="heading">Talk to us!</h2>
      <Form
        formStyle={"form__primary"}
        btnStyle={"btn__primary"}
        btnText={"Let us know!"}
      />
      <p className="tos__message">
        By sending this message you agree to our{" "}
        <a className="tos__link" href="#;">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a className="tos__link" href="#;">
          Terms of Use
        </a>{" "}
        concerning your data, you will not be signed up to our newsletter
        without prior notification, unsubscribe at anytime.
      </p>
      <div className="socials">
        <a href="#;">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#;">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#;">
          <img src={tiktok} alt="tiktok" />
        </a>
      </div>
    </section>
  );
};

export default Cta;
