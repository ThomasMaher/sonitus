import React, { Component } from 'react';
import styles from './SideBar.css';

export default class SideBar extends Component {
  render() {
    return (
      <section className={styles.container}>
        <h2>Book</h2>
        <ul>
          <li>Free Content</li>
          <li>Mixing</li>
        </ul>
      </section>
    )
  }
}
