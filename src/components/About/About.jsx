import React from "react";
import LogoEarth from "../LogoEarth/LogoEarth";
import "./About.css";
import Heading from "../Heading/Heading";
import Underline from "../Heading/Underline";

const About = () => {
  return (
    <section id="about" className="about">
      <div>
        <Heading>About the Company </Heading>
        <Underline />
      </div>
      <div className="about__wrapper">
        <div className="nullea__logo">
          <LogoEarth />
        </div>
        <div className="about__content">
          <div className="about__content--paragraph">
            <span className="about__content--marker">1</span>
            <p className="text__small">
              Nullea cherishes this Earth, the company was started by a small
              team of people with the same values and opinions relating to
              Saving our Planet, and to this day, this remains the same. Not
              only do we give a percentage of our yearly earnings to various
              Green organizations and charities, but our products themselves are
              all made with sustainable and recycled material, and are shipped
              and stored the same way.
            </p>
          </div>
          <div className="about__content--paragraph">
            <span className="about__content--marker">2</span>
            <p className="text__small">
              Skincare is not a privilege, it's a human right. And human rights
              are an inalienable part of our workplace culture and our goals. We
              keep our labor costs and our prices high because we disavow and
              condemn modern slavery under the guise of an unseen profit, and we
              would rather close the company before building it on the backs of
              the impoverished.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
