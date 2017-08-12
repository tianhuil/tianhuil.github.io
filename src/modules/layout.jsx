import React from 'react';
import { Link } from 'react-router-dom'
import './layout.css'

const Header = () => (
  <div className={"navbar"}>
    <div className={"container"}>
      <Link to="/" className="navbar-brand">Michael Li</Link>
      <ul className={"nav navbar-nav navbar-right"}>
        <li>
          <Link to="/home.html">Home</Link>
        </li>
        <li>
          <Link to="/professional.html">Professional</Link>
        </li>
        <li>
          <Link to="/writing.html">Writing</Link>
        </li>
      </ul>
    </div>
  </div>
)

const Footer = () => (
  <div></div>
)

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <section>
          <div className={"mt30 container"}>
            {this.props.children}
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}

export default Layout
