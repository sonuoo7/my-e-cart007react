import React from 'react'
import bannerPic from '../Images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
      <div className="banner">
        <div className="desc">
          <div>
            <h2>Welcome </h2>
            <span>To</span>
            <h3>E-Mart</h3>
          </div>
          <p>
            Wide Range of Genuine Products, Easy Returns, Cash on Delivery,
            Browse Now! Avail No Cost EMI. . Brand Warranty. Free Shipping.
            Enjoy Delightful Prices.
          </p>
          <button>EXPLORE NOW</button>
        </div>
        <img src={bannerPic} alt="logo" />
      </div>
    );
}

export default Banner