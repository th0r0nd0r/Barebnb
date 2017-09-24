import React from 'react';
import SpotIndexContainer from '../spots/spot_index_container';

const Main = () => (
  <div className="main">
    <style>
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300');
    </style>  
    <div className="background">
      <h1 className="splash-title">Live the simple life. Anywhere.</h1>
    </div>
    <div className="spots">
      <SpotIndexContainer />
    </div>
  </div>
);

export default Main;
