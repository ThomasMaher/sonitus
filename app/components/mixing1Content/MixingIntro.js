import React, { Component } from "react"
import styles from "../Content.css";
import SideBar from '../SideBar.js';

export default class Mixing1 extends Component {
  render() {
    return(
      <section className={styles.container}>
        <SideBar />

        <section className={styles.mixing}>
          <h1>Mixing Level 1 - Mixing Foundations</h1>

          <p>WELCOME TO LEVEL 1 MIXING: FOUNDATIONS. No matter how much
          experience you have as a mix engineer, it’s always helpful to come
          back to the basics, aka “Foundations.” In my many years of mixing,
          I have learned that in the beginning, you are learning what to do,
          but as you spend time honing your craft and improving, one thing is
          for certain - no matter how fancy you get or how many techniques you
          learn, the foundations are what you will spend the most time using. Fully understanding the basics is crucial to developing your ear, as well as, eventually, your own technique and style. This includes proper recording processes which are sometimes overlooked as a part of successful mixing.</p>

          <p>UNDERSTAND THIS!! Mixing is an individual art and everyone will eventually find their own path .
          Congratulations on embarking on your journey!
          </p>

        </section>

      </section>
    )
  }
}
