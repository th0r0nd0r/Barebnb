import React from 'react';
import SpotIndexContainer from '../spots/spot_index_container';

const Main = () => (
  <div className="main">
    <div className="background" />
    <div className="spots">
      <SpotIndexContainer />
    </div>
  </div>
);

export default Main;
