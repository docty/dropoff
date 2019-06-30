import React from 'react'
import PropTypes from 'prop-types'

class LatestProduct extends React.Component {
  render() {
    return (
      <section className="top-letest-product-section">
    		<div className="container">
    			<div className="section-title">
    				<h2>LATEST PRODUCTS</h2>
    			</div>
    			<div className="product-slider owl-carousel">


    				<div className="product-item">
    					<div className="pi-pic">
    						<div className="tag-new">New</div>
    						<img src="./images/product/4.jpg" alt=""/>
    						<div className="pi-links">
    							<a href="#" className="add-card"><i className="flaticon-bag"></i><span>ADD TO CART</span></a>
    							<a href="#" className="wishlist-btn"><i className="flaticon-heart"></i></a>
    						</div>
    					</div>
    					<div className="pi-text">
    						<h6>GHC price</h6>
    						<p>name </p>
    					</div>
    				</div>


    			</div>
    		</div>
    	</section>
    );
  }
}

export default LatestProduct;
