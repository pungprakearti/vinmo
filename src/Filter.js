import React, { Component } from 'react';
import { FaSquare, FaRegSquare } from 'react-icons/fa';

import './Filter.scss';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: {
        manufacturer: true,
        appellation: true,
        varietal: true,
        vintage: true
      },
      selection: {
        manufacturer: [],
        appellation: [],
        varietal: [],
        vintage: []
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    //
    //get section name
    let section = evt.target.className.slice(
      evt.target.className.lastIndexOf('-') + 1
    );

    //toggle showing options
    if (this.refs[section].className === 'Filter-options-cont hide') {
      this.refs[section].setAttribute('class', 'Filter-options-cont');
    } else {
      this.refs[section].setAttribute('class', 'Filter-options-cont hide');
    }
  }

  render() {
    console.log(this.props);

    return (
      <div className="Filter-cont">
        Filter Search
        <div>
          {Object.keys(this.props.filters).map(header => {
            return (
              <React.Fragment>
                <div
                  className={`Filter-options-header Filter-header-${header}`}
                  onClick={this.handleClick}
                >
                  <div className={`Filter-header-text Filter-header-${header}`}>
                    {header}
                  </div>
                  <div
                    className={`Filter-header-text Filter-header-${header}`}
                    ref={`${header}-icon`}
                  >
                    -
                  </div>
                </div>
                <div className="Filter-options-cont" ref={header}>
                  {this.props.filters[header].map(option => {
                    return (
                      <div className="Filter-options">
                        <div className="Filter-options-text">{option}</div>
                        <div className="Filter-options-icon">
                          <FaRegSquare />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}
