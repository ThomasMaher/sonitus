// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Content.css';
import SideBar from './SideBar.js';

export default class Home extends Component {
  render() {
    return (
      <section className={styles.container}>
        <SideBar />
        <section className={styles.home} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link><br />
          <Link to ="/input">Create Lesson Plan</Link>
        </section>
      </section>
    );
  }
}
