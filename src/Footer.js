import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer-cont">
        <div className="Footer-border">
          VinMo! is a site created as a test by Andrew Pungprakearti
          <a href="https://www.biscuitsinthebasket.com">
            www.biscuitsinthebasket.com
          </a>
          <a href="https://github.com/pungprakearti/vinmo">VinMo! Github</a>
        </div>
      </div>
    );
  }
}
