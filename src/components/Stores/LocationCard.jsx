import React, { useState } from "react";
import "./LocationCard.css";

const LocationCard = ({
  image,
  telephone,
  address,
  workHours,
  mapLocation,
  onClick,
  isSelected,
}) => {
  const [classAnimation, setClassAnimation] = useState(
    address.includes("Ilica")
  );

  return (
    <div
      onClick={() => onClick(mapLocation)}
      className={`location__card ${
        classAnimation
          ? isSelected
            ? "selectFirst"
            : "deselectFirst"
          : isSelected
          ? "select"
          : "deselect"
      }`}
    >
      <div className="location__info">
        <p className="location__address">{address}</p>
        <p className="location__telephone">{telephone}</p>
        <p className="location__workHours">{workHours}</p>
      </div>
      <div className="location__image">
        <img src={image} alt="location image" />
      </div>
    </div>
  );
};

export default LocationCard;
