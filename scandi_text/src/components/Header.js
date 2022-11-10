import React, { Component } from 'react';
import logo from '../assets/Group.png';
import currency from '../assets/currency.png';
import emptyCart from '../assets/EmptyCart.png';


export default class Header extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar_gender'>
          <nav>WOMEN</nav>
          <nav>MEN</nav>
          <nav>KIDS</nav>
        </div>
        <div className='navbar_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar_shopcart'> 
          <img src={currency} alt="currency" />
          <img src={emptyCart} alt="empty cart" />
        </div>
      </div>
    )
  }
}
