import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  navigateToShow() {
    const url = `/spots/${this.props.match.params.spotId}`;
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.match.params.spotId);
    const currentUser = this.props.currentUser;
    const review = Object.assign({}, this.state, {
      spot_id: spotId,
      author_id: currentUser.id
    });
    this.props.createReview({review});
    this.navigateToShow();
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {
    return (
      <div className="review-form">
        <form>
          <label>Rating</label>
          <br />
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br />
          <label>Review</label>
          <br />
          <textarea
            cols="80"
            rows="20"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br />
          <button  onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <button onClick={this.navigateToShow}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
