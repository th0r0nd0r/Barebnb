import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from 'react-rating';

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

  componentWillUnmount() {
    this.props.clearErrors();
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
    this.props.createReview({review}).then(() => this.navigateToShow());
  }

  update(field) {
    console.log("field:", field );
    return e => {
      console.log("currentTarget", e.currentTarget.value);
      this.setState({[field]: e.currentTarget.value});};
  }

  renderErrors() {
    console.log("errors:", this.props.errors);
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="review-form">
        <span className="form-errors">{this.renderErrors()}</span>
        <form>
          <label className="spot-show-body">Rating</label>
          <br />
          <Rating
            onChange={(rate) => this.setState({rating: rate})}
            initialRate={this.state.rating}
            />
          <br />
          <label className="spot-show-body">Review</label>
          <br />
          <textarea className="review-field"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br />
          <button  className="session-submit-button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
        <button className="session-submit-button cancel-button" onClick={this.navigateToShow}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
