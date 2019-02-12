import React, { Component } from 'react';

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
    console.log('click ', evt.target.className);
    evt.target.setAttribute('class', 'test');
    //hide, or show set here <---------
  }

  render() {
    console.log(this.props);

    return (
      <div className="Filter-options-cont">
        <div>
          {Object.keys(this.props.filters).map(header => {
            return (
              <React.Fragment>
                <div
                  className={`Filter-options-header`}
                  onClick={this.handleClick}
                >
                  {header}
                </div>
                <div className="Filter-options">
                  {this.props.filters[header].map(option => {
                    return <React.Fragment>{option}box</React.Fragment>;
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
