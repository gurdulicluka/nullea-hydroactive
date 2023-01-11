import React from "react";
import "./Map.css";

const Map = ({ currentMap }) => {
  return (
    <div className="stores__map">
      <iframe
        className="map__iframe"
        src={currentMap}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
