import React, { Component } from 'react';
import Sort from './Sort';
import Item from './Item';
import './Board.scss';

export default class Board extends Component {
  render() {
    return (
      <div className="Board-cont">
        <Sort filtered={this.props.filtered} setSorted={this.props.setSorted} />
        <div className="Board-items-cont">
          {this.props.filtered.map(item => {
            return <Item item={item} key={item.product_id} />;
          })}
        </div>
      </div>
    );
  }
}
