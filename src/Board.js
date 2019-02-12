import React, { Component } from 'react';
import Sort from './Sort';
import './Board.scss';

export default class Board extends Component {
  render() {
    return (
      <div className="Board-cont">
        <Sort />
        Board
      </div>
    );
  }
}
