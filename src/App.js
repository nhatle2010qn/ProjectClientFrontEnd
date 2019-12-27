import React, { Component } from 'react';
import {ToastContainer} from 'react-toastify';
import Layout from './components/Layout/Layout';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <ToastContainer />
        {this.showContent(routes)}
      </Layout>
    );
  }

  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      })
    }
    return (
      <Switch>{result}
      </Switch>
    )
  }

}

export default App;
