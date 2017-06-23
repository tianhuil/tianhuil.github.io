import React from 'react';

export const NavbarInstance = () => (
  <div className={"navbar my-navbar"}>
    <div className={"container"}>
      <a className={"navbar-brand"} href="#">Michael Li</a>
      <ul className={"nav navbar-nav navbar-right"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#awards">Awards</a>
        </li>
        <li>
          <a href="#companies">Companies</a>
        </li>
        <li>
          <a href="#non-profit">Non-Profit</a>
        </li>
        <li>
          <a href="#writing">Writing</a>
        </li>
      </ul>
    </div>
  </div>
)
