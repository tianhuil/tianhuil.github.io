import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, IndexRoute, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './modules/home.jsx'
import Layout from './modules/layout.jsx'
import Professional from './modules/professional.jsx'
import Writing from './modules/writing.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const history = createBrowserHistory()

const App = () => (
  <BrowserRouter history={ history }>
    <Layout>
      <Route exact path='/' component={ Professional }/>
      <Route path='/home.html' component={ Home } />
      <Route path='/professional.html' component={ Professional } />
      <Route path='/writing.html' component={ Writing } />
    </Layout>
  </BrowserRouter>
)

render(<App/>, document.getElementById('app'));
