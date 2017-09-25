import React from 'react';

import SpotIndex from '../spot_index/spot_index';
import SpotMap from '../spot_map/spot_map';

const Search = ({ spots }) => (
  <div className="search-map">
    <div className="search-stuff">
      <SpotIndexContainer searchSpots={ spots }
    </div>
    <div className="map-stuff">

    </div>
  </div>
);
