import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <div className={"navbar"}>
    <div className={"container"}>
      <Link to="#" className={"navbar-brand"}>Michael Li</Link>
      <ul className={"nav navbar-nav navbar-right"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/awards">Awards</Link>
        </li>
        <li>
          <Link to="/companies">Companies</Link>
        </li>
        <li>
          <Link to="/non-profit">Non-Profit</Link>
        </li>
        <li>
          <Link to="/writing">Writing</Link>
        </li>
      </ul>
    </div>
  </div>
)

const Footer = () => (
  <div></div>
)

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}
