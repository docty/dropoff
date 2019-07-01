import React from 'react'

import Header from './home/Header'
import LeftCategory from './category/LeftCategory'
import RightCategory from './category/RightCategory'
import Footer from './home/Footer'

class Category extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      category : "",
      type : ""
    }
    this.itemClickHandler = this.itemClickHandler.bind(this)
  }

  itemClickHandler(category, type) {
    this.setState({
      category : category,
      type : type
    });

  }

  render() {
    return (
      <div>
        <Header/>

        	<div className="page-top-info">
        		<div className="container">
        			<h3>Category Page</h3>
        			<div className="site-pagination">
        				<p>Keep Shopping With DropOff and get more bonuses</p>
        			</div>
        		</div>
        	</div>

          <section className="category-section spad">
            <div className="container">
              <div className="row">
              <LeftCategory itemClickHandler={this.itemClickHandler}/>
              <RightCategory queryValue={this.state}/>

              </div>
            </div>
          </section>
          <Footer/>
      </div>
    );
  }
}

export default Category;
