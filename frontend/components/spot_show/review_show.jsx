import React from 'react';

const Review = ({ rating, body, authorImage, authorName }) => (
  <div>
    <hr className="hr" />
    <div className="review-info">
      <h3 className="spot-show-header">Rating: {rating}</h3>
      <div className="author-info">
        <img className="author-avatar" src={authorImage} />
        <div className="centered-text-container">
          <h4 className="host-name author-name">{authorName}</h4>
        </div>
      </div>
    </div>
    <ul>
      <li className="spot-show-body">{body}</li>
    </ul>
  </div>
);

export default Review;
