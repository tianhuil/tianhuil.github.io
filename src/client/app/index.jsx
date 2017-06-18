import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render () {
    return <h1> Hello React!</h1>;
  }
}

render(<App/>, document.getElementById('app'));
