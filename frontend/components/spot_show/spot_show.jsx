import React from 'react';
import { Link } from 'react-router-dom';

import SpotDetail from './spot_detail';
import SpotMap from '../spot_map/spot_map';

import { ProtectedRoute } from '../../util/route_util';

const SpotShow = ({ spot, spotId, getSpot }) => {
  const spots = {
    [spotId]: spot
  };

  return(
    <div className="spot-show">
      <div className="single-spot-map">
        <SpotMap
          spots={spots}
          spotId={spotId}
          singleSpot={true}
          getSpot={getSpot}
        />
      </div>

      <div className="spot-details">
        <SpotDetail spot={spot} />
      </div>
    </div>
  );
};

export default SpotShow;
