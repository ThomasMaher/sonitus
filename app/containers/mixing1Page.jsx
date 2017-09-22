import React, { Component } from 'react';
import Home from './HomePage';
import Mixing1 from '../components/mixing1Content/Mixing1.js';
import Mixing2 from '../components/mixing1Content/Mixing2.js';

export default class FreeContentPage extends Component {
  render() {
    let content;

    switch (this.props.location.pathname) {
      case "/mixing/1.1":
        content = <Mixing1 />;
        break;
      case "/mixing/1.2":
        content = <Mixing2 />;
        break;
      default:
        content = <Home />;
    }
    return (
      content
    );
  }
}
