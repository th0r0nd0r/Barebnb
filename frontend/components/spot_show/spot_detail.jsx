import React from 'react';
import { Link } from 'react-router';
import Rating from 'react-rating';

import Review from './review_show';
// import ReviewShowContainer from './review_show_container';


const ratingStyle = {
  color: 'yellow'
};


class SpotDetail extends React.Component {
  constructor(props) {
    super(props);

    this.beds = this.beds.bind(this);
  }

  beds() {
    if (this.props.spot.beds === 1) {
      return "bed";
    } else {
      return "beds";
    }
  }

  reviewList(reviews = []) {
    // console.log("reviews:", reviews);
    // debugger;
    if (reviews.length > 0) {
      return reviews.map(review => {
        console.log("review:", review);
        return(<Review
          spotId={this.props.spot.id}
          id={review.id}
          rating={review.rating}
          body={review.body}
          authorName={review[review.author_id].username}
          authorImage={review[review.author_id].img_url}
          authorId={review[review.author_id].id}
          key={review.id}
          currentUser={this.props.currentUser}
          getSpot={this.props.getSpot}
          deleteReview={this.props.deleteReview}
          />
        );
      }
    );
    }
  }

  reviewCount(reviews = []) {
    return reviews.length;
  }


  render() {
    console.log("host:", this.props.host);
    const spot = this.props.spot;
    const host = this.props.host;
    // const reviewCount = spot.reviews.length;
    return(
      <div className="spot-detail">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
        </style>
        <img className="spot-show-image" src={spot.img_url} />
        <div className="title-and-host-info">
          <div className="title-and-rating">
            <h1 className="spot-show-title">{spot.title}</h1>
          <Rating
              className="rating"
              style={ratingStyle}
              initialRate={parseFloat(spot.averageRating)}
              readonly={true}
            />
          </div>
          <div className="host-info">
            <img className="host-avatar" src={host.img_url} />
            <h4 className="host-name author-name">{host.username}</h4>
          </div>
        </div>
        <hr className="hr" />
        <div className="spot-show-text-container">
          <div className="spot-show-price">${spot.price}</div>
          <div className="spot-show-body">{spot.beds} {this.beds()}</div>
        </div>
        <hr className="hr" />
        <div className="spot-show-text-container">
          <h2 className="spot-show-header">The Space</h2>
          <p className="spot-show-body">{spot.description}</p>
        </div>
        <hr className="hr" />
        <div className="spot-show-text-container">
          <h1 className="reviews-title">{this.reviewCount(spot.reviews)} Reviews</h1>
        {this.reviewList(spot.reviews)}
        </div>
      </div>
    );
  }
}

export default SpotDetail;
