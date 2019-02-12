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
    this.handleClear = this.handleClear.bind(this);
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
    //
    //get className based on font awesome icon. There is a bug where one icon
    //is nested within a container, so you lose the className. Also, if you
    //click on the div, but miss the icon, you still get a selection.
    let className;
    if (evt.target.parentElement.className.baseVal) {
      className = evt.target.parentElement.className.baseVal;
    } else {
      if (evt.target.className.baseVal) {
        className = evt.target.className.baseVal;
      } else className = evt.target.className;
    }

    let period = className.indexOf('.');
    let section = className.slice(className.lastIndexOf('-') + 1, period);
    let option = className.slice(period + 1);

    //this code prevents vintage options from not being selected by
    //changing them into numbers like they are stored.
    if (section === 'vintage') option = +option;

    //toggle selection
    if (this.state.selection[section].indexOf(option) === -1) {
      this.setState(st => ({
        selection: {
          ...st.selection,
          [section]: [...st.selection[section], option]
        }
      }));
    } else {
      let tempState = [...this.state.selection[section]].filter(
        i => i !== option
      );
      this.setState(st => ({
        selection: { ...st.selection, [section]: tempState }
      }));
    }
  }

  handleClear() {
    this.setState({
      selection: {
        manufacturer: [],
        appellation: [],
        varietal: [],
        vintage: []
      }
    });
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
                        <div
                          className={`Filter-options-icon-cont Filter-${header}.${option}`}
                          onClick={this.handleSelect}
                        >
                          {this.state.selection[header].indexOf(option) ===
                          -1 ? (
                            <FaRegSquare
                              className={`Filter-icon Filter-${header}.${option}`}
                            />
                          ) : (
                            <FaSquare
                              className={`Filter-icon Filter-${header}.${option}`}
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
        <div className="Filter-clear" onClick={this.handleClear}>
          Clear
        </div>
      </div>
    );
  }
}
