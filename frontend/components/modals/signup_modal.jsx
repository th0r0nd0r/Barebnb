// The structure for this code came from this blog post by David Gilbertson:
// https://codeburst.io/modals-in-react-f6c3ff9f4701

import React from 'react';

import ModalWrapper from '../ModalWrapper.jsx';

const SignIn = props => {
  const signIn = provider => {
    props.hideModal();
    props.signIn(provider);
  };

  return (
    <ModalWrapper
      {...props}
      title="Sign in"
      width={400}
      showOk={false}
    >
      <p>Choose your flavor</p>
      <button onClick={() => signIn('facebook')}>Facebook</button>
      <button onClick={() => signIn('google')}>Google</button>
      <button onClick={() => signIn('twitter')}>Twitter</button>
    </ModalWrapper>
  );
};
