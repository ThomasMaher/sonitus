import React, { Component } from 'react';
import styles from './SideBar.css';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  render() {
    return (
      <section className={styles.container}>
        <h2><Link to='/'>Book</Link></h2>
        <ul>
          <li><Link to="/freecontent">Free Content</Link></li>
          <li>Mixing</li>
        </ul>
      </section>
    )
  }
}
