import React from 'react';
import styles from './button.module.css';

export default function Button({ buttonText }) {
  return (
    <button type="button" className={styles.btn}>{buttonText}</button>
  );
}
