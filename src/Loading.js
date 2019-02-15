import React, { Component } from 'react';
import shield from './shield.png';
import unsafe from './unsafe.png';
import './Loading.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="Loading-cont">
        <div className="Loading-inner-cont">
          If you can read this,
          <br />
          it's because you have to allow
          <br />
          unsafe scripts to load in Chrome.
          <br />
          <br />
          1. Click on the shield icon in the url bar.
          <br />
          <br />
          <img src={shield} alt="screen capture of shield in url bar" />
          <br />
          <br />
          2. Click on "Load Unsafe Scripts."
          <br />
          <br />
          <img
            src={unsafe}
            alt="screen capture dialog box showing load unsafe scripts"
          />
        </div>
      </div>
    );
  }
}
