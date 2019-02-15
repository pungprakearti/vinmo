import React, { Component } from 'react';
import findFilters from './utility/findFilters.js';
import Header from './Header';
import Filter from './Filter';
import Board from './Board';
import Footer from './Footer';
import axios from 'axios';
import filterProducts from './utility/filterProducts';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: [],
      filters: [],
      filtered: []
    };

    this.handleFilters = this.handleFilters.bind(this);
    this.setSorted = this.setSorted.bind(this);
  }

  componentDidMount() {
    //
    //fetch data from API
    axios
      .get('http://vwewebtest.com/wines/array.php')
      .then(res => {
        //
        //all products
        let products = res.data.product_listing;

        //filters
        let filters = findFilters(products);

        //save to state
        this.setState({
          loading: false,
          products: products,
          filters: filters,
          filtered: products
        });
      })
      .catch(err => {
        console.log('error:', err);
      });
  }

  /** filter products */
  handleFilters(filterSelection) {
    let filtered = filterProducts(filterSelection, this.state.products);

    //if the filtered list is empty, fill it with all the products
    if (filtered.length < 1) this.setState({ filtered: this.state.products });
    else {
      this.setState({
        filtered: filterProducts(filterSelection, this.state.products)
      });
    }
  }

  /** method is sent down to Sort component and returns with
      the sorted products and refreshes the props to the board
      with it */
  setSorted(sorted) {
    this.setState({ filtered: sorted });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Main-cont">
          {this.state.loading ? (
            'LOADING'
          ) : (
            <React.Fragment>
              <Filter
                filters={this.state.filters}
                toggleFilters={this.handleFilters}
              />
              <Board
                filtered={this.state.filtered}
                setSorted={this.setSorted}
              />
            </React.Fragment>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
