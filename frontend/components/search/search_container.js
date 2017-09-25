import { connect } from 'react-redux';

import { toArray } from '../../reducers/selectors';
import Search from './Search';

const mapStateToProps = state => ({
  spots: Object.values(state.entities.spots)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);