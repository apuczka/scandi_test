import React, { Component } from 'react';
import Header from './Header';
import Category from './Category';
import Sidebar from './Sidebar';
import Currency from './Currency';

export default class Main extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Category />
        {/*<Sidebar />*/}
        <Currency />
      </div>
    )
  }
}
