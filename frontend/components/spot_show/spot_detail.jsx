import React from 'react';
import { Link } from 'react-router';

// import ReviewShow from './review_show';

const SpotDetail = ({ spot }) => {
  return(
    <div className="spot-detail">
      <img className="spot-show-image" src={spot.img_url} />
      <h1 className="spot-show-title">{spot.title}</h1>
      <p className="spot-show-description">{spot.description}</p>
      <div className="spot-show-price">{spot.price}</div>
      <div className="spot-show-beds">{spot.beds}</div>
  </div>
  );
};

export default SpotDetail;
