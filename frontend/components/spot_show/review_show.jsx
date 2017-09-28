import React from 'react';

const Review = ({ rating, body, authorImage, authorName }) => (
  <div>
    <hr className="hr" />
    <div className="host-info">
      <img className="author-avatar" src={authorImage} />
      <h4 className="host-name">{authorName}</h4>
    </div>
    <ul>
      <li className="spot-show-header">Rating: {rating}</li>
      <li className="spot-show-body">{body}</li>
    </ul>
  </div>
);

export default Review;
