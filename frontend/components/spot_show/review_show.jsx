import React from 'react';

const Review = ({ rating, body }) => (
  <div>
    <hr className="hr" />
    <ul>
      <li className="spot-show-header">Rating: {rating}</li>
      <li className="spot-show-body">{body}</li>
    </ul>
  </div>
);

export default Review;
