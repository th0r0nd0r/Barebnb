import { connect } from 'react-redux';
import { login, logout, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state, ownProps) => {
  const buttonText = ownProps.buttonText ? ownProps.buttonText : "Login";
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    buttonText
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: (currentUser) => dispatch(login(currentUser)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
