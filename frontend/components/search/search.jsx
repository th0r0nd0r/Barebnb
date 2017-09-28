import React from 'react';

import SpotIndexContainer from '../spots_index/spot_index_container';
import SpotMap from '../spot_map/spot_map';

const Search = ({ spots, updateFilter }) => (
  <div className="search-map">
    <div className="search-stuff">
      <SpotIndexContainer searchSpots={ spots } />
    </div>
    <div className="map-stuff">
      <SpotMap
        spots={ spots }
        singleSpot={false}
        updateFilter={updateFilter}
         />
    </div>
  </div>
);

export default Search;
