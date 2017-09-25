import React from 'react';

import SpotIndexContainer from '../spots_index/spot_index_container';
import SpotMap from '../spot_map/spot_map';

const Search = ({ spots }) => (
  <div className="search-map">
    <div className="search-stuff">
      <SpotIndexContainer searchSpots={ spots } />
    </div>
    <div className="map-stuff">
      <h3>There is a map here</h3>
      <SpotMap />
    </div>
  </div>
);

export default Search;
