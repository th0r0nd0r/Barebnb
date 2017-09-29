import { connect } from 'react-redux';

import { updateSpot, clearErrors } from '../../actions/spot_actions';
import SpotUpdateForm from './spot_update_form';

const mapStateToProps = (state, { spot }) => ({
  spot
});

const mapDispatchToProps = dispatch => ({
  updateSpot: spot => dispatch(updateSpot(spot)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotUpdateForm);
