import React from "react";
import emailjs from "emailjs-com";
import "./Form.css";
import Button from "../Button/Button";

const Form = ({ formStyle, btnStyle, btnText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_5ds7pta", e.target, "vV9gqMMHJdpD2yVhq")
      .then(alert("Form submitted :)"));
    e.target.reset();
  };

  return (
    <form className="form__container" type="submit" onSubmit={handleSubmit}>
      <div className="email__container">
        <input
          id="email"
          name="email"
          className={`email__input ${formStyle}`}
          type="email"
          placeholder=" "
          required
        />
        <label>
          <span className={formStyle}>Email Address</span>
        </label>
      </div>
      <div className="msg__container">
        <textarea
          id="message"
          name="message"
          className={`msg__input ${formStyle}`}
          spellCheck="false"
          placeholder=" "
          required
        />
        <label>
          <span className={formStyle}>Your Message</span>
        </label>
      </div>
      <Button style={btnStyle}>{btnText}</Button>
    </form>
  );
};

export default Form;
