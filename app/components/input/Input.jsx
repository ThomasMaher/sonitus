import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Input.css';
// The names of classes entered by a user must be unique. This should be handled at a db level.

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      classes: {
        Mixing1: ["",
          "lesson1", "lesson2"
        ],
        Mixing2: ["",
          "lessons 1", "lesson2"],
      },
      addClass: "",
      addLesson: "",
    }
  }

  componentDidMount() {
    let classes = this.props.get.lessonPlan;
    this.setState({classes});
  }

  addClass(e) {
    e.preventDefault();

    let current = this.state.classes;
    current[this.state.addClass] = [];

    this.setState({classes: current});

    let content = this.props.get.content;
    content[this.state.addClass] = {};
    // this.props.dispatch.saveContent

    this.state.addClass = "";
  }

  addLesson(e, thisClass) {
    e.preventDefault();

    let current = this.state.classes;
    let changeClass = this.state.classes[thisClass];
    let val = changeClass[0];
    changeClass[0] = "";
    changeClass.push(val);
    current[thisClass] = changeClass;

    this.setState({classes: current});

    let content = this.props.get.content;
    // content[]
  }

  updateAddLesson(e, thisClass) {
    let current = this.state.classes
    current[thisClass][0] = e.target.value;

    this.setState({class: current});
  }

  updateAddClass(e) {
    e.preventDefault();

    let val = e.target.value;
    this.setState({addClass: val});
  }

  getLesson(e) {
    const thisClass = e.target.id.split(",")[0];
    const lesson = e.target.id.split(",")[1];

    this.props.dispatch.getLesson({thisClass, lesson})
  }
  // = {
  //   noClass: {
  //     noLesson1: "no content",
  //     noLesson2: "no content2",
  //   },
    // class1: {
    //   lesson1: "content",
    // }
  // }
  render() {
    let classes = Object.keys(this.state.classes)
    let subjects = [];

    if (classes.length > 0) {
      for (let i = 0; i < classes.length; i++) {
        let thisClass = classes[i];
        let lessons = this.state.classes[thisClass];
        subjects.push(<li className={styles.classTitle} key={thisClass}>
                        {thisClass}
                      </li>);
        for (let j = 1; j < lessons.length; j++) {
          let key = thisClass+i+j;

          subjects.push(<li className={styles.lessonTitle} key={key}>
                          <Link to={`/input/${key}`}
                                onClick={e => this.getLesson(e)}
                                id={[thisClass, lessons[j]]}>
                                edit
                          </Link>
                          {lessons[j]}
                        </li>);
        }
        subjects.push(<form className={styles.addLesson}
                      onSubmit={e => this.addLesson(e, thisClass)}>
                        <input type="text" value={this.state.classes[thisClass][0]}
                          placeholder="Add a lesson"
                          onChange={e => this.updateAddLesson(e, thisClass)}></input>
                        <input type="submit" value="Add"></input>
                      </form>)
      }
    }

    return (
      <section className={styles.container}>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <h1 className={styles.title}>Lesson Plan</h1>
        <ul className={styles.courseContents}>
          {subjects}
          <li className={styles.addSubject}>
            <form onSubmit={e => this.addClass(e)}>
              <input type="text" value={this.state.addClass}
                placeholder="Add a class"
                onChange={e => this.updateAddClass(e)}></input>
              <input type="submit" value="Add"></input>
            </form>
          </li>
        </ul>
      </section>
    )
  }
}
