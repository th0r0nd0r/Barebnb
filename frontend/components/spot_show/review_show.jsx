import React from 'react';
import Rating from 'react-rating';
import ReviewEditFormContainer from './review_edit_form_container';



class Review extends React.Component {
  constructor(props) {
    super(props);

    this.maybeButtons = this.maybeButtons.bind(this);
    // this.navigateToShow = this.navigateToShow.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // navigateToSpotShow() {
  //   this.props.history.push(`/spots/${this.props.spotId}`);
  // }

  handleClick(e) {
    e.preventDefault();
    console.log("clicked:", this.props.getSpot);
    this.props.deleteReview(this.props.id);
  }

  maybeButtons() {
    const {id, body, rating, authorId } = this.props;
    if ( this.props.currentUser && (this.props.authorId === this.props.currentUser.id)) {
      return(
        <div className="edit-delete-review-buttons">
          <ReviewEditFormContainer id={id} body={body} rating={rating} />
          <button
            className="delete-review-button"
            onClick={this.handleClick}
            >Delete Review</button>
        </div>
      );
    }
  }

  render() {
    const { rating, body, authorImage, authorName, id } = this.props;
    return(
      <div>
        <hr className="hr" />
        <div className="review-info">
          <div className="rating-and-buttons">
            <Rating className="rating"
              initialRate={rating}
              readonly={true}
              />
            {this.maybeButtons()}
          </div>
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
  }
}

export default Review;
