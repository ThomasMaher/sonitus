import React, { Component } from 'react';
import Home from './HomePage';
import Intro from '../components/mixing1Content/MixingIntro.js';
import Mixing0 from '../components/mixing1Content/Mixing0.js';
import Mixing1 from '../components/mixing1Content/Mixing1.js';
import Mixing2 from '../components/mixing1Content/Mixing2.js';

export default class Mixing1Page extends Component {
  render() {
    let content;

    switch (this.props.location.pathname) {
      case "/mixing/1/1":
        content = <Mixing1 />;
        break;
      case "/mixing/1/2":
        content = <Mixing2 />;
        break;
      case "/mixing/1/intro":
        content = <Intro />
        break;
      case "/mixing/1/0":
        content = <Mixing0 />
        break;
      default:
        content = <Home />;
    }
    return (
      content
    );
  }
}
