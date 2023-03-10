import React from 'react';
import Link from 'next/link';
import getButtonStyles from './buttonStyles';

export default function Button({
  buttonText, isLight, type, url = '/contact',
}) {
  const buttonStyles = getButtonStyles({ isLight });
  const isSubmit = type === 'submit';

  return (
    isSubmit
      ? <button type="submit" style={buttonStyles} className="button">{buttonText}</button>
      : (
        <Link href={url}>
          <button type="button" style={buttonStyles} className="button">{buttonText}</button>
        </Link>
      )
  );
}
