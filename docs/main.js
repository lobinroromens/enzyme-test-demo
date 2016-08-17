import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Navbar from './Navbar.js';
import IndexSearch from './IndexSearch.js';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
const routes =
<Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="navbar" component={Navbar} />
        <Route path="indexSearch" component={IndexSearch} />
    </Route>
  </Router>;
ReactDOM.render(
  routes,
  document.getElementById('root')
);
