import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: (currentUser) => dispatch(login(currentUser))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
