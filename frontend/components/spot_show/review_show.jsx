import React from 'react';
import Rating from 'react-rating';
import ReviewEditFormContainer from './review_edit_form_container';



class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  // maybeButtons() {
  //   if (this.props.)
  // }

  render() {
    const { rating, body, authorImage, authorName, id } = this.props;
    return(
      <div>
        <hr className="hr" />
        <div className="review-info">
          <div className="rating-and-buttons">
            <Rating
              initialRate={rating}
              readonly={true}
              />
            <ReviewEditFormContainer id={id} body={body} rating={rating} />
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
