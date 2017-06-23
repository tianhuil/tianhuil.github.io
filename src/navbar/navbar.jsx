import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap"

const styles = {
  navbar: {
    borderBottom: "1px solid #dddddd",
    background: "#ffffff",
    padding: "15px 15px"
  },
  brand: {
    color: '#19A0D2',
    fontWeight: "200",
    fontSize: "32px",
  },
  nav: {
    fontSize: "20px",
    color: "#aaaaaa",
    fontWeight: "200"
  }
}

/*.my-navbar .navbar-nav li.active a {
  color: #dddddd;
}

.my-navbar .navbar-nav li.active a:hover,
.my-navbar .navbar-nav li.active a:focus {
  color: #aaaaaa;
}

.my-navbar .navbar-nav li a:hover,
.my-navbar .navbar-nav li a:focus {
  background-color: transparent;
  color: #dddddd;
}*/


export const NavbarInstance = () => (
  <Navbar style={styles.navbar}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#" style={styles.brand}>Michael Li</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav style={styles.nav} pullRight>
      <NavItem eventKey={1} href="#">Home</NavItem>
      <NavItem eventKey={2} href="#">Companies</NavItem>
      <NavItem eventKey={3} href="#">Non-Profit</NavItem>
      <NavItem eventKey={4} href="#">Awards</NavItem>
      <NavItem eventKey={5} href="#">Writing</NavItem>
    </Nav>
  </Navbar>
)
