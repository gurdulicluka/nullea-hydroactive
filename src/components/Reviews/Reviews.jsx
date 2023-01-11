import React from "react";
import "./Reviews.css";
import SingleReview from "./SingleReview";
import { reviews } from "../../util/constants";
import Heading from "../Heading/Heading";

const Reviews = () => {
  return (
    <section className="reviews">
      <Heading>A Few Kind Words</Heading>
      {reviews.map((review) => {
        return <SingleReview key={review.id} {...review} />;
      })}
    </section>
  );
};

export default Reviews;
