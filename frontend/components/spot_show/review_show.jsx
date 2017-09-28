import React from 'react';
import Rating from 'react-rating';

const Review = ({ rating, body, authorImage, authorName }) => (
  <div>
    <hr className="hr" />
    <div className="review-info">
      <Rating
        initialRate={rating}
        readonly={true}
        />
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
