import React, { Component } from 'react';
import './Item.scss';

export default class Item extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className="Item-cont">
        <img
          src={item.bottle_shot}
          alt={`${item.vintage} ${item.manufacturer} ${item.varietal}`}
        />
        <div className="Item-name">
          {item.vintage} {item.manufacturer}
          <br />
          {item.varietal}
        </div>
        <div className="Item-price">{item.base_price - 0.01}</div>
      </div>
    );
  }
}
