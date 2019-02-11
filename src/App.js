import React, { Component } from 'react';
// import sortArrBy from './utility/sortArrBy.js';
import Header from './Header';
import Filter from './Filter';
import Sort from './Sort';
import Board from './Board';
import Footer from './Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    console.log('mounted, fetching data');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Sort />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
