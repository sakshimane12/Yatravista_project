import React, { useState } from "react";
import Place from './Place';
import Details from './Details';

const Parent = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleViewTour = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div>
      <Place onViewTour={handleViewTour} />
      <Details selectedPlace={selectedPlace} />
    </div>
  );
};

export default Parent;