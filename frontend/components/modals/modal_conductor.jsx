// The structure for this code came from this blog post by David Gilbertson:
// https://codeburst.io/modals-in-react-f6c3ff9f4701

import React from 'react';

import SignupModal from './signup_modal';
import LoginModal from './login_modal';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'SIGNUP':
      return <SignupModal {...props}/>;
    case 'LOGIN':
      return <LoginModal {...props}/>;
    default:
      return null;
  }
};

export default ModalConductor;
