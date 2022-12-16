import React from 'react';

import getButtonStyles from './buttonStyles';

export default function Button({ buttonText, isLight }) {
  const buttonStyles = getButtonStyles({ isLight });

  return (
    <button type="button" style={buttonStyles} className="button">{buttonText}</button>
  );
}
