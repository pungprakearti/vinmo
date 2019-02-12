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

    this.handleClickSection = this.handleClickSection.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  /** If filter section header is clicked, toggle display of section */
  handleClickSection(evt) {
    //
    //get section name
    let section = evt.target.className.slice(
      evt.target.className.lastIndexOf('-') + 1
    );

    //toggle showing options
    if (this.state.showOptions[section]) {
      this.setState({
        showOptions: { ...this.state.showOptions, [section]: false }
      });
      this.refs[section].setAttribute('class', 'Filter-options-cont hide');
    } else {
      this.setState({
        showOptions: { ...this.state.showOptions, [section]: true }
      });
      this.refs[section].setAttribute('class', 'Filter-options-cont');
    }
  }

  /** toggle selection of filters */
  handleSelect(evt) {
    console.log('getting here');
    let className = evt.target.className.baseVal;
    let period = className.indexOf('.');
    let section = className.slice(className.lastIndexOf('-') + 1, period);
    let option = className.slice(period + 1);

    // <---------- ERROR here

    console.log(section, option);

    if (this.state.selection[section].indexOf(option) === -1) {
      this.setState({
        selection: { ...this.state.selection, [section]: option }
      });
    } else {
      let tempState = this.state.selection[section];
      console.log(tempState);
      this.setState({
        selection: { ...this.state.selection, [section]: option }
      });
    }
  }

  render() {
    return (
      <div className="Filter-cont">
        Filter Search
        <div>
          {Object.keys(this.props.filters).map(header => {
            return (
              <React.Fragment>
                <div
                  className={`Filter-options-header Filter-header-${header}`}
                  onClick={this.handleClickSection}
                >
                  <div className={`Filter-header-text Filter-header-${header}`}>
                    {header}
                  </div>
                  <div className={`Filter-header-text Filter-header-${header}`}>
                    -
                  </div>
                </div>
                <div className="Filter-options-cont" ref={header}>
                  {this.props.filters[header].map(option => {
                    return (
                      <div className="Filter-options">
                        <div className="Filter-options-text">{option}</div>
                        <div>
                          {this.state.selection[header].indexOf(option) ===
                          -1 ? (
                            <FaSquare
                              className={`Filter-options-icon Filter-${header}.${option}`}
                              onClick={this.handleSelect}
                            />
                          ) : (
                            <FaRegSquare
                              className={`Filter-options-icon Filter-${header}.${option}`}
                              onClick={this.handleSelect}
                            />
                          )}
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
