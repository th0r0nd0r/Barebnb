import { connect } from 'react-redux';

import { createReview, clearErrors } from '../../actions/spot_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.spot
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
