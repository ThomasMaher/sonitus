import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Input.css';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      classes: {
        name: "Mixing",
        lesson: "lessons 1"
      },
    }
  }

  addClass(e) {
    e.preventDefault;

    let current = this.state.classes;
    let keys = Object.keys(this.state.classes);
    let next = keys.sort()[keys.length - 1] + 1;
    current[next] = e.target.value;

    this.setState({classes: current});
  }

  render() {
    let lessons;
    let contents = [];
    // let classes = Object.keys(this.state.classes);

    debugger;
    if (Object.keys(this.state.classes).length > 0) {
      let contents = this.state.classes.forEach( subject => {
        contents.push(<li>
          {subject.name}
        </li>);
      })
    }
    return (
      <section className={styles.container}>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <form onSubmit={e => this.addClass(e)}>
          <input className="add-class-name-input">
          </input>
        </form>
        <ul>
          {contents}
        </ul>
      </section>
    )
  }
}
