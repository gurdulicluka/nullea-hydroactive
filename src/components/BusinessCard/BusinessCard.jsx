import React from "react";
import "./BusinessCard.css";
import { linkedinCream, instagramCream } from "../../assets";

const BusinessCard = ({ name, role, email, linkedin }) => {
  return (
    <div className="businessCard">
      <span>{name}</span>
      <span>{role}</span>
      <span>{email}</span>
      <div className="business__socials">
        <a href="/">
          <img src={instagramCream} alt="instagram" />
        </a>
        <a href={linkedin}>
          <img src={linkedinCream} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default BusinessCard;
