import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createSpot } from '../../actions/spot_actions';
import SpotForm from './spot_form';

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng"),
  spots: Object.values(state.entities.spots)
});

const mapDispatchToProps = dispatch => ({
  createSpot: spot => dispatch(createSpot(spot))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm));
