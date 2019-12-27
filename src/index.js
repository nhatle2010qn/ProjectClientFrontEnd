import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { store } from './store';


const element = document.getElementById('root');
const history = require('history').createBrowserHistory();

ReactDOM.render(<Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
</Provider>, element);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
