import { connect } from 'react-redux';

import { getSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';

import { getUser } from '../../actions/user_actions';

import SpotShow from './spot_show';

const mapStateToProps = (state, { match }) => {
  const spotId = parseInt(match.params.spotId);
  const spot = selectSpot(state.entities, (match.params.spotId));
  console.log("spot from container:", spot);
  return {
    spotId: spotId,
    spot: spot
  };
};

const mapDispatchToProps = dispatch => ({
  getSpot: id => dispatch(getSpot(id)),
  getUser: id => dispatch(getUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
