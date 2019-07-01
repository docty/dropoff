import React from 'react'


class LeftCategory extends React.Component {

  constructor(props){
    super(props)

    this.itemClickHandler = this.itemClickHandler.bind(this);
  }


  itemClickHandler(cartegory, type){
    this.props.itemClickHandler(cartegory, type)

  }


  render() {
    return (
      <div className="col-lg-3 order-2 order-lg-1">
                <div className="filter-widget">
                <h2 className="fw-title">Categories</h2>
                <ul className="category-menu">
                  <li><a href="#" id="womanwear">Woman wear</a>
                    <ul className="sub-menu">
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'midi')}>Midi Dresses <span>(5)</span></a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'maxi')}>Maxi Dresses<span>(9)</span></a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'prom')}>Prom Dresses<span>(6)</span></a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'little')}>Little Black Dresses <span>(2)</span></a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'mini')}>Mini Dresses<span>(6)</span></a></li>
                    </ul>
                  </li>
                  <li><a href="#" id="manwear">Man Wear</a>
                    <ul className="sub-menu">
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('menwear', 'midi')}>Midi Dresses <span>(8)</span></a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('menwear', 'maxi')}>Maxi Dresses<span>(3)</span></a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('menwear', 'prom')}>Prom Dresses<span>(2)</span></a></li>
                    </ul></li>
                  <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('bags', 'bagswear')}  id="bags">Bags & Purses</a></li>
                  <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('footwear', 'footwear')} id="footwear">Footwear</a></li>
                </ul>
              </div>
        </div>
    );
  }
}

export default LeftCategory;
