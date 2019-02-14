import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="Header-cont">
        <div className="Header-text-cont">
          <div className="Header-vin">Vin</div>
          <div className="Header-mo">Mo!</div>
        </div>
      </div>
    );
  }
}
