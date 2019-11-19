import React from 'react';

import './Button.scss';

const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    {...otherProps}
    className={`${isGoogleSignIn ? 'google' : ''} button`}>
    {children}
  </button>
);

export default Button;
