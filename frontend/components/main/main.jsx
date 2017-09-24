import React from 'react';
import SpotIndexContainer from '../spots_index/spot_index_container';

const Main = () => (
  <div className="main">
    <style>
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
    </style>
    <div className="landing-page">
      <div className="background">
        <h1 className="splash-title">Live the simple life. Anywhere.</h1>
      </div>
      <div className="spots">
        <h1 className="spot-index-title">Featured Spots </h1>
        <SpotIndexContainer />
      </div>
    </div>
  </div>
);

export default Main;
