import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import DetailPage from './components/DetailPage/Detail';
import CheckOut from './components/CheckOut/CheckOut';
import ProductByCategory from './components/ProductByCategory/ProductByCategory';
import Cart from './components/Cart/Cart';
import CompareProduct from './components/Compare/CompareProduct';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path= '/' exact= {true} component={HomePage} />
        <Route path= '/Detail/:id' exact= {false} component={DetailPage} />
        <Route path= '/Checkout' exact= {false} component={CheckOut} />
        <Route path= '/ProductByCategory' exact= {false} component={ProductByCategory} />
        <Route path= '/Cart' exact= {false} component={Cart} />
        <Route path= '/Compare' exact= {false} component={CompareProduct} />
      </Switch>
    );
  }
}

export default App;
