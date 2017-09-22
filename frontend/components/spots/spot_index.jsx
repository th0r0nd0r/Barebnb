import React from 'react';
import SpotIndexContainer from './spot_index_container';

const SpotIndex = ({ spots }) => (
  <div>
    <h1>Spots: </h1>
    {spots.map(spot => (
      <BenchIndexItem
        spot={spot}
        key={spot.id}
      />
    ))}
  </div>
);

export default SpotIndex;
