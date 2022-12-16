import React from 'react';

import getButtonStyles from './buttonStyles';

export default function Button({ buttonText, isLight, type }) {
  const buttonStyles = getButtonStyles({ isLight });

  return (
    <button type={type === 'submit' ? 'submit' : 'button'} style={buttonStyles} className="button">{buttonText}</button>
  );
}
