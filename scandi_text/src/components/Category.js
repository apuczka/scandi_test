import React, { Component } from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

export default class Category extends Component {
  render() {
    return (
      <div className='category'>
        <h1>Category name</h1>
        <div className='category_container'>
          <div className='category_container_img'>
            <img src={img1} alt=""></img>
            <p>Apollo Running Short</p>
            <span>$50.00</span>
          </div>
          <div className='category_container_img'>
            <img src={img2} alt=""></img>
            <p>Apollo Running Short</p>
            <span>$50.00</span>
          </div>
          <div className='category_container_img'>
            <div className='category_container_img-3'>
              <img src={img3} alt=""></img>
              <div>OUT OF STOCK</div>
            </div>

            <p>Apollo Running Short</p>
            <span>$50.00</span>
          </div>
          <div className='category_container_img'>
            <img src={img4} alt=""></img>
            <p>Apollo Running Short</p>
            <span>$50.00</span>
          </div>
          <div className='category_container_img'>
            <img src={img1} alt=""></img>
            <p>Apollo Running Short</p>
            <span>$50.00</span>
          </div>
          <div className='category_container_img'>
            <img src={img3} alt=""></img>
            <p>Apollo Running Short</p>
            <span>$50.00</span>
          </div>



        </div>




      </div>
    )
  }
}
