import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, Switch } from "react-router"
import createBrowserHistory from 'history/createBrowserHistory'
import { Home } from './home.jsx'
import { Awards } from './awards.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const history = createBrowserHistory()

const App = () => (
  <div>
    <Router history={ history }>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/#index" component={ Home } />
        <Route path="/#awards" component={ Awards } />
      </Switch>
    </Router>
  </div>
)

render(<App/>, document.getElementById('app'));
