import React from 'react';

import getButtonStyles from './buttonStyles';

export default function Button({
  buttonText, isLight, type, url,
}) {
  const buttonStyles = getButtonStyles({ isLight });
  const isSubmit = type === 'submit';

  return (
    isSubmit
      ? <button type="submit" style={buttonStyles} className="button">{buttonText}</button>
      : <button type="button" style={buttonStyles} className="button">{buttonText}</button>
  );
}
