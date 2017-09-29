import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import styles from './Create.css';

// This is an example of how the structure of the content value should saved in order to be added appropriately into state:
// let defaultState = {
//   noClass: {
//     noLesson1: "no content",
//     noLesson2: "no content2",
//   },
// };
// Remember to ADD each lesson to the above content structure rather than saving each lesson on it's own thereby replacing the existing content.

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({value});
    console.log(this.state.value);
  }

  saveContent(e) {
    e.preventDefault();
    // content could be sent to a database here

  }

  render() {
    return(
      <section className={styles.container}>
        <div className={styles.backButton}>
          <Link to="/input">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <div className={styles.inputSection}>
          <ReactQuill value={this.state.value}
            onChange={this.handleChange}
            className={styles.quillContainer}/>
          <button onCliick={e => this.saveContent(e)}>Save Content</button>
        </div>
      </section>
    )
  }
}


  // <form>
  //   <textarea rows="30" cols="115"
  //     className={styles.inputField}></textarea>
  //   <br />
  //   <input type="submit" value="Save Content"></input>
  // </form>
