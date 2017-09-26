import React from 'react';

import SpotIndexContainer from '../spots_index/spot_index_container';
import SpotFormContainer from '../spot_form/spot_form_container';
import SpotMap from '../spot_map/spot_map';
import { Switch, Route } from 'react-router-dom';

const propsSpotIndexContainer = ({ spots }) => {
  return (
    <SpotIndexContainer
      searchSpots={ spots }
      {...spots}
    />
  );
};

const Search = ({ spots }) => (
  <div className="search-map">
    <div className="search-stuff">
      <Switch>
        <Route exact path="/spots/new" component={SpotFormContainer} />
        <Route exact path="/spots" render={propsSpotIndexContainer} />
      </Switch>
    </div>
    <div className="map-stuff">
      <SpotMap spots={ spots }/>
    </div>
  </div>
);

export default Search;
