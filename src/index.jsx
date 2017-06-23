import React from 'react';
import {render} from 'react-dom';
import { NavbarInstance } from './navbar/navbar.jsx'
import { Home } from './home/home.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const App = () => (
  <div>
    <NavbarInstance/>
    <Home/>
  </div>
)

render(<App/>, document.getElementById('app'));
