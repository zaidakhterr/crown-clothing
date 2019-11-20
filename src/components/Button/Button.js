import React from 'react';

import './Button.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    {...otherProps}
    className={`${isGoogleSignIn ? 'google' : ''} ${
      inverted ? 'invert' : ''
    } button`}>
    {children}
  </button>
);

export default Button;
