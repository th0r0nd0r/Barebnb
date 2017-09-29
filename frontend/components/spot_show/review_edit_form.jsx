import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from 'react-rating';
import Modal from 'react-modal';

const customStyles = {
overlay : {
  position          : 'fixed',
  display: 'flex',
  top               : 0,
  left              : 0,
  right             : 0,
  bottom            : 0,
  backgroundColor   : 'rgba(255, 255, 255, 0.75)'
},
content : {

  position                   : 'absolute',
  width                      : '450px',
  height                     : 'auto',
  minHeight                  : '350px',
  top                        : '200px',
  left                       : '50%',
  transform                  : 'translate(-50%, 0)',
  bottom                     : '200px',
  border                     : '1px solid #ccc',
  background                 : '#fff',
  overflow                   : 'auto',
  WebkitOverflowScrolling    : 'touch',
  borderRadius               : '4px',
  outline                    : 'none',
  padding                    : '20px'

}
};


class ReviewEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
      body: this.props.body
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.clearErrors();
    this.setState({modalIsOpen: false});
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  navigateToShow() {
    const url = `/spots/${this.props.match.params.spotId}`;
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const spotId = parseInt(this.props.match.params.spotId);
    const currentUser = this.props.currentUser;
    const id = this.props.reviewId;
    const review = Object.assign({}, this.state, {
      spot_id: spotId,
      author_id: currentUser.id,
      id
    });
    this.props.clearErrors();
    console.log("to update:", review);
    this.props.updateReview({review})
    .then(() => {
      if (this.props.errors.length === 0) {
      this.closeModal();
    }})
    .then(() => this.navigateToShow());
  }

  update(field) {
    // console.log("field:", field );
    return e => {
      console.log("currentTarget", e.currentTarget.value);
      this.setState({[field]: e.currentTarget.value});};
  }

  renderErrors() {
    // console.log("errors:", this.props.errors);
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

  handleCancel(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.closeModal();
  }

  render() {
    return (
      <div className="modal-form">
        <button onClick={this.openModal}>Edit Review</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login Modal"
        >

          <div className="review-form">
            <span className="form-errors">{this.renderErrors()}</span>
            <h1>Edit Review</h1>
            <form >
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
            <button className="session-submit-button cancel-button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(ReviewEditForm);
