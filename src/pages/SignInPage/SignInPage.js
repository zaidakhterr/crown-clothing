import React from 'react';
import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import './SignInPage.scss';

const SignInPage = () => (
  <div className='sign-in-page'>
    <SignInForm />
    <SignUpForm />
  </div>
);

export default SignInPage;
