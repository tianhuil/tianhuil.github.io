import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, IndexRoute, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './modules/home.jsx'
import Awards from './modules/awards.jsx'
import Layout from './modules/layout.jsx'
import Companies from './modules/companies.jsx'
import NonProfit from './modules/non-profit.jsx'
import Writing from './modules/writing.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const history = createBrowserHistory()

const App = () => (
  <BrowserRouter history={ history }>
    <Layout>
      <Route exact path='/' component={ Home }/>
      <Route path='/awards' component={ Awards } />
      <Route path='/companies' component={ Companies } />
      <Route path='/non-profit' component={ NonProfit } />
      <Route path='/writing' component={ Writing } />
    </Layout>
  </BrowserRouter>
)

render(<App/>, document.getElementById('app'));
