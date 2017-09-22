import React, { Component } from 'react';
import HomePage from './HomePage';
import Mixing2Intro from '../components/mixing2Content/Mixing2Intro';

export default class Mixing2Page extends Component {
  render() {
    let content;

    switch (this.props.location.pathname) {
      case "/mixing/2/intro":
        content = <Mixing2Intro />
        break;
      default:
        content = <HomePage />
    }
    return (
      content
    )
  }
}
