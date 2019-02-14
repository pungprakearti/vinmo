import React, { Component } from 'react';
import sortArrBy from './utility/sortArrBy';
import './Sort.scss';

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = { sort: 'a-z', sorted: [] };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.setState({
      sort: evt.target.className.slice(evt.target.className.indexOf(' ') + 1)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    //
    //check for change in state and sort products
    if (this.state.sort !== prevState.sort) {
      //sort products
      switch (this.state.sort) {
        case '$-$$$':
          this.setState({
            sorted: sortArrBy(this.props.filtered, 'base_price')
          });
          break;
        case '$$$-$':
          this.setState({
            sorted: sortArrBy(this.props.filtered, 'base_price', false)
          });
          break;
        case 'z-a':
          this.setState({
            sorted: sortArrBy(
              this.props.filtered,
              'varietal',
              false
              // 'varietal'
            )
          });
          break;
        default:
          this.setState({
            sorted: sortArrBy(
              this.props.filtered,
              'manufacturer',
              true,
              'varietal'
            )
          });
      }
    }
  }

  render() {
    return (
      <div className="Sort-cont">
        <div className="Sort-button">Sort</div>
        <div className="Sort-dropdown-cont">
          <div className="Sort-option $-$$$" onClick={this.handleClick}>
            $ -> $$$
          </div>
          <div className="Sort-option $$$-$" onClick={this.handleClick}>
            $$$ -> $
          </div>
          <div className="Sort-option a-z" onClick={this.handleClick}>
            A -> Z
          </div>
          <div className="Sort-option z-a" onClick={this.handleClick}>
            Z -> A
          </div>
        </div>
      </div>
    );
  }
}
