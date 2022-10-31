import React from 'react';
import styles from './burger.module.css';

export default function Burger() {
  return (
    // <!--    Made by Erik Terwan    -->
    // <!--   24th of November 2015   -->
    // <!--        MIT License        -->
    <nav role="navigation" className={styles.navigation}>
      <div className={styles.menuToggle}>
        {/* <!--
        A fake / hidden checkbox is used as click reciever,
        so you can use the :checked selector on it.
        --> */}
        <input type="checkbox" />

        {/* <!--
        Some spans to act as a hamburger.
        --> */}
        <span />
        <span />
        <span />

        {/* <!--
        Too bad the menu has to be inside of the button
        but hey, it's pure CSS magic.
        --> */}
        {/* <ul id="menu">
          <a href="/"><li>Home</li></a>
          <a href="/"><li>About</li></a>
          <a href="/"><li>Info</li></a>
          <a href="/"><li>Contact</li></a>
          <a href="https://erikterwan.com/" target="_blank" rel="noreferrer"><li>Show me more</li></a>
        </ul> */}
      </div>
    </nav>
  );
}
