import React from 'react';
import {render} from 'react-dom';
import style from './style.css'
import { NavbarInstance } from './navbar/navbar.jsx'
import { Home } from './home/home.jsx'

const App = () => (
  <div>
    <NavbarInstance/>
    <Home/>
  </div>
)

render(<App/>, document.getElementById('app'));
