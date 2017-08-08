import React, { Component } from 'react';
import styles from './Mixing.css';
import SideBar from './SideBar.js';

export default class Mixing1 extends Component {
  render() {
    return(
      <section>
        <SideBar />
        <section className={styles.container}>
          <h1>Mixing 1.2</h1>
        </section>
      </section>
    )
  }
}
