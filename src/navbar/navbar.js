import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap"
import styles from './navbar.css'

export const NavbarInstance = () => (
  <Navbar className={styles.navbar}>
    <Navbar.Header>
      <Navbar.Brand className={styles.brand}>
        <a href="#">Michael Li</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav className={styles.nav} pullRight>
      <NavItem eventKey={1} href="#">Home</NavItem>
      <NavItem eventKey={2} href="#">Companies</NavItem>
      <NavItem eventKey={3} href="#">Non-Profit</NavItem>
      <NavItem eventKey={4} href="#">Awards</NavItem>
      <NavItem eventKey={5} href="#">Writing</NavItem>
    </Nav>
  </Navbar>
)
