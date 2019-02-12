import React, { Component } from 'react';
import findFilters from './utility/findFilters.js';
import Header from './Header';
import Filter from './Filter';
import Sort from './Sort';
import Board from './Board';
import Footer from './Footer';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, product_listing: [] };
  }

  componentDidMount() {
    console.log('mounted, fetching data');
    axios
      .get('http://vwewebtest.com/wines/array.php')
      .then(res => {
        this.setState({
          product_listing: res.data.product_listing,
          loading: false
        });
      })
      .catch(err => {
        console.log('error:', err);
      });
  }

  render() {
    if (!this.state.loading) findFilters(this.state.product_listing);
    return (
      <div className="App">
        {this.state.loading ? 'LOADING' : 'READY TO GO!'}
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
