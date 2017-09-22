import React, { Component } from 'react';
import styles from './SideBar.css';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  constructor(props) {
    super(props)
    this.dropDown = this.dropDown.bind(this);
    this.state = {
      mixes: styles.mixesUp
    }
  }

  dropDown(e) {
    e.preventDefault();
    let mixes = (this.state.mixes === styles.mixesUp) ? styles.mixesDrop : styles.mixesUp;
    this.setState({mixes: mixes})
  }

  render() {
    return (
      <section className={styles.container}>
        <h2 className={styles.book}><Link to='/'>Book</Link></h2>
        <ul>
          <li><Link to="/freecontent">Free Content</Link></li>

          <div className={this.state.mixes}>

            <li onClick={e => this.dropDown(e)}
              className="dropdown-button">Mixing1</li>
          </div>


        </ul>
      </section>
    )
  }
}

// <div>
//   <Link to='/mixing/1/intro'>Mixing 1 intro</Link>
// </div>
// <div>
//   <Link to='/mixing/1/0'>Mixing 1.0</Link>
// </div>
// <div>
//   <Link to='/mixing/1/1'>Mixing 1.1</Link>
// </div>
// <div>
//   <Link to='/mixing/1/2'>Mixing 1.2</Link>
// </div>

// <div className={this.state.mixes}>
//   <div>
//     <Link to='/mixing/2/intro'>Mixing 2 Intro</Link>
//   </div>
// </div>
// <li className="dropdown-button">Mixing2</li>
