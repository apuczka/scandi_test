import React, { Component } from 'react';
import Header from './Header';
import Category from './Category';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Category />
      </div>
    )
  }
}
