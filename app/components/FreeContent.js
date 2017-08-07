import React, { Component } from 'react';
import SideBar from '../components/SideBar.js';
import styles from './FreeContent.css';

export default class FreeContent extends Component {
  render() {
    return(
      <section>
        <SideBar />
        <section className={styles.container}>
          <h1>Hello FreeContent</h1>
        </section>
      </section>
    )
  }
}
