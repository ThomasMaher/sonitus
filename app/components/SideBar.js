import React, { Component } from 'react';
import styles from './SideBar.css';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  constructor(props) {
    super(props)
    this.dropDown = this.dropDown.bind(this);
    this.state = {
      viewLinks: styles.drop
    }
  }

  dropDown(e) {
    e.preventDefault();
    let viewLinks = (this.state.viewLinks === styles.up) ? styles.drop : styles.up;
    this.setState({viewLinks: viewLinks})
  }

  render() {
    return (
      <section className={styles.container}>
        <h2><Link to='/'>Book</Link></h2>
        <ul>
          <li><Link to="/freecontent">Free Content</Link></li>
          <div className={styles.mixes}>
            <div>
              <Link to='/mixing/1.1'>Mixing 1.1</Link>
            </div>
            <div>
              <Link to='/mixing/1.2'>Mixing 1.2</Link>
            </div>
          </div>
          <li className={this.state.viewLinks}
            onClick={e => this.dropDown(e)}>Mixing</li>
          <li> </li>
        </ul>
      </section>
    )
  }
}
