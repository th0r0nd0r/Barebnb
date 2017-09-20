import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    signup: (currentUser) => dispatch(signup(currentUser))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
