import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import styles from './Create.css';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({value})
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
