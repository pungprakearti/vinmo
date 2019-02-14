import React, { Component } from 'react';
import sortArrBy from './utility/sortArrBy';
import './Sort.scss';

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = { sort: 'a-z', sorted: [], show: false };

    this.handleClick = this.handleClick.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  /** this select's the sort type and hides the dropdown menu */
  handleClick(evt) {
    this.setState({
      sort: evt.target.className.slice(evt.target.className.indexOf(' ') + 1),
      show: false
    });
  }

  componentDidUpdate(prevProps, prevState) {
    //
    //check for change in state and sort products
    if (this.state.sort !== prevState.sort) {
      //
      //sort products
      switch (this.state.sort) {
        case '$-$$$':
          this.props.setSorted(sortArrBy(this.props.filtered, 'base_price'));
          break;

        case '$$$-$':
          this.props.setSorted(
            sortArrBy(this.props.filtered, 'base_price', false)
          );
          break;

        case 'z-a':
          this.props.setSorted(
            sortArrBy(this.props.filtered, 'manufacturer', false, 'varietal')
          );
          break;

        default:
          this.props.setSorted(
            sortArrBy(this.props.filtered, 'manufacturer', true, 'varietal')
          );
      }
    }

    //check for change in show
    if (this.state.show) {
      this.refs['Sort-dropdown-cont'].setAttribute(
        'class',
        'Sort-dropdown-cont show'
      );

      setTimeout(() => {
        this.refs['Sort-dropdown-cont'].setAttribute(
          'class',
          'Sort-dropdown-cont grow'
        );
      }, 0);
      //
    } else {
      this.refs['Sort-dropdown-cont'].setAttribute(
        'class',
        'Sort-dropdown-cont shrink'
      );

      setTimeout(() => {
        this.refs['Sort-dropdown-cont'].setAttribute(
          'class',
          'Sort-dropdown-cont'
        );
      }, 250);
    }
  }

  toggleDropDown() {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  }

  render() {
    return (
      <div className="Sort-cont">
        <div className="Sort-button" onClick={this.toggleDropDown}>
          Sort
        </div>
        <div className="Sort-dropdown-cont" ref="Sort-dropdown-cont">
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
