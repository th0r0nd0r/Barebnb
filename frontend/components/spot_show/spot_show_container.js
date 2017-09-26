import { connect } from 'react-redux';

import { getSpot } from '../../actions/spot_actions';
import { selectSpot } from '../../reducers/selectors';
import SpotShow from './spot_show';

const mapStateToProps = (state, { match }) => {
  const spotId = parseInt(match.params.spotId);
  const spot = selectSpot(state.entities, (match.params.spotId));
  console.log("spot from container:", spot);
  return {
    spotId,
    spot
  };
};

const mapDispatchToProps = dispatch => ({
  getSpot: id => dispatch(getSpot(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
