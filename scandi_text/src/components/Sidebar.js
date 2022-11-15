import React, { Component } from 'react';
import img5 from '../assets/img5.png';

export default class Sidebar extends Component {
  render() {

    return (
      <div className='sidebar'>
        <div className='sidebar_title'>My bag <p>, 3 items</p></div>
        <div className='sidebar_content'>
          <div className='sidebar_content_specyfication'>
            <p className='sidebar_content_specyfication_name'>Apollo Running Short</p>
            <p className='sidebar_content_specyfication_price'>$50.00</p>
            <div className='sidebar_content_specyfication_sizes'>
              <div>Size:</div>
              <div className='sidebar_content_specyfication_sizes_size'>
                <div>XS</div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
              </div>
            </div>
            <div className='sidebar_content_specyfication_color'>
              <div>Color:</div>
              <div className='sidebar_content_specyfication_color_box'>
                <div className='sidebar_content_specyfication_color_box_1'></div>
                <div className='sidebar_content_specyfication_color_box_2'></div>
                <div className='sidebar_content_specyfication_color_box_3'></div>
              </div>
            </div>
          </div>
          <div className='sidebar_content_quantity'>
            <div className='sidebar_content_quantity-plus'>+</div>
            <p>1</p>
            <div className='sidebar_content_quantity-minus'>-</div>
          </div>
          <img src={img5} alt=""></img>

        </div>
        <div className='sidebar_total'>
          <div className='sidebar_total_name'>Total</div>
          <div className='sidebar_total_sum'>$200.00</div>
        </div>
        <div className='sidebar_button'>
          <button className='sidebar_button_bag'>View bag</button>
          <button className='sidebar_button_check'>CHECK OUT</button>

        </div>



      </div>
    )
  }
}
