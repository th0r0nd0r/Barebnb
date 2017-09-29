import { connect } from 'react-redux';

import { createReview, clearErrors, getSpot } from '../../actions/spot_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.spot
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  clearErrors: () => dispatch(clearErrors()),
  getSpot: (id) => dispatch(getSpot(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
