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
    this.state = {
      loading: true,
      products: [],
      filters: [],
      filtered: [],
      filterSelection: []
    };

    this.toggleFilters = this.toggleFilters.bind(this);
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
          filtered: products,
          filterSelection: []
        });

        console.log('mounted, fetching data');
      })
      .catch(err => {
        console.log('error:', err);
      });
  }

  toggleFilters(filterSelection) {
    //filter products here and then add to state
    this.setState = { filterSelection: filterSelection };
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
                toggle={this.toggleFilters}
              />
              <Board />
            </React.Fragment>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
