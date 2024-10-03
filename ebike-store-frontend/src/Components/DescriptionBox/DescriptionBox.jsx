import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Buy products from our online virtual shop and get products delivered to your door-step. You can also visit 
                our physical store and see the variety of products we deal in. 
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox