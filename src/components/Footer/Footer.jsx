import React from "react";
import Form from "../Form/Form";
import BusinessCard from "../BusinessCard/BusinessCard";
import { contacts } from "../../util/constants";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page__footer">
      <div className="footer__container container">
        <div className="footer__form">
          <div className="form__text">
            <h2 className="form__heading">Hire us for work!</h2>
            <p>This brand isn't real, but the site is.</p>
          </div>
          <Form
            formStyle={"form__secondary"}
            btnStyle={"btn__secondary"}
            btnText={"Let's work!"}
          />
        </div>
        <div className="footer__about">
          {contacts.map((person) => (
            <BusinessCard key={person.id} {...person} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
