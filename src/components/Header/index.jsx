import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import Cart from "../Cart";

import logo from "../../images/logo.svg";

import "./styles.css";

function Header({cartSize}) {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="rocketshoes"/>
      </Link>

      <Link to="/cart" style={{textDecoration: "none"}}>
        <Cart cartSize={cartSize}/>
      </Link>
    </header>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
