import React, { Component } from 'react';
import styles from './SideBar.css';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  constructor(props) {
    super(props)
    this.dropDown = this.dropDown.bind(this);
    this.state = {
      viewLinks: styles.hidden
    }
  }

  dropDown(e) {
    e.preventDefault();
    let viewLinks = (this.state.viewLinks === styles.hidden) ? styles.viewable : styles.hidden;
    this.setState({viewLinks: viewLinks})
  }

  render() {
    return (
      <section className={styles.container}>
        <h2><Link to='/'>Book</Link></h2>
        <ul>
          <li><Link to="/freecontent">Free Content</Link></li>
          <div className={this.state.viewLinks}>
            <Link to='/mixing/1.1'>Mixing 1.1</Link>
          </div>
          <div className={this.state.viewLinks}>
            <Link to='/mixing/1.2'>Mixing 1.2</Link>
          </div>
          <li onClick={e => this.dropDown(e)}>Mixing</li>
        </ul>
      </section>
    )
  }
}
