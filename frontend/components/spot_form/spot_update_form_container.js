import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateSpot, clearErrors, getSpot } from '../../actions/spot_actions';
import SpotUpdateForm from './spot_update_form';
import { selectSpot } from '../../reducers/selectors';

const mapStateToProps = (state, { match, location }) => {
  const spotId = match.params.spotId;
  // console.log("container spotId:", spotId);
  // console.log("container match:", match);
  // console.log("map lat", new URLSearchParams(location.search).get("lat"));
  return {
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng"),
  currentUser: state.session.currentUser,
  errors: state.errors.spot,
  spotId
  };
};

const mapDispatchToProps = dispatch => ({
  getSpot: id => dispatch(getSpot(id)),
  updateSpot: spot => dispatch(updateSpot(spot)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotUpdateForm));
