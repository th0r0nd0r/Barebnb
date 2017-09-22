import SpotIndex from './spot_index';

import { connect } from 'react-redux';
import { getSpots } from '../../actions/spot_actions';

const mapStateToProps = (state) => {
  return {
    spots: Object.values(state.entities.spots)
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getSpots: () => dispatch(getSpots())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotIndex);
