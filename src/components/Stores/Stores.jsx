import React, { useState } from "react";
import "./Stores.css";
import LocationCard from "./LocationCard";
import Map from "./Map";
import { locations } from "../../util/constants";
import Heading from "../Heading/Heading";
import Underline from "../Heading/Underline";

const Stores = () => {
  const [currentMap, setCurrentMap] = useState(locations[0].mapLocation);

  const currentMapHandler = (entry) => {
    setCurrentMap(entry);
  };

  return (
    <section id="map" className="stores">
      <Heading>We Offer in Store Consultations</Heading>
      <Underline />
      <div className="stores__location--container">
        <Map currentMap={currentMap} />
        {locations.map((store) => {
          return (
            <LocationCard
              isSelected={currentMap === store.mapLocation}
              onClick={currentMapHandler}
              key={store.id}
              {...store}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Stores;
