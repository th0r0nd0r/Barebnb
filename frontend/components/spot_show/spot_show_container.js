import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getSpot, deleteReview } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';


import { getUser } from '../../actions/user_actions';

import SpotShow from './spot_show';

const mapStateToProps = (state, { match }) => {
  const spotId = parseInt(match.params.spotId);
  const spot = selectSpot(state.entities, (match.params.spotId));
  console.log("spot from container:", spot);
  const currentUser = state.session.currentUser;
  return {
    spotId: spotId,
    spot: spot,
    spots: state.entities.spots,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  getSpot: id => dispatch(getSpot(id)),
  getUser: id => dispatch(getUser(id)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow));
