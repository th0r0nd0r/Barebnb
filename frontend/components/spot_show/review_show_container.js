import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteReview } from '../../actions/spot_actions';
import Review from './review_show';

const mapStateToProps = (state, { spotId, rating, body, authorImage, authorName, authorId, id, currentUser }) => ({
  rating,
  body,
  authorId,
  authorImage,
  authorName,
  id,
  currentUser,
  spotId
});

const mapDispatchToProps = dispatch => ({
  deleteReview: review => dispatch(deleteReview(review))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
))(Review);
