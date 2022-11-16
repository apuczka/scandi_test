import React, { Component } from 'react'

export default class Currency extends Component {
  render() {
    return (
      <div className='currency'>
        <div className='currency-usd'>$ USD</div>
        <div className='currency-eur'>€ EUR</div>
        <div className='currency-jpy'>¥ JPY</div>

      </div>
    )
  }
}
