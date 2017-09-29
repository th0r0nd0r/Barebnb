import { connect } from 'react-redux';

import { updateReview, clearErrors } from '../../actions/spot_actions';
import ReviewEditForm from './review_edit_form';

const mapStateToProps = (state, { id, body, rating }) => ({
  currentUser: state.session.currentUser,
  reviewId: id,
  body,
  rating,
  errors: state.errors.spot
});

const mapDispatchToProps = dispatch => ({
  updateReview: review => dispatch(updateReview(review)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewEditForm);
