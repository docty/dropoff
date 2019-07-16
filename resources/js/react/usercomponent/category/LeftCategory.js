import React from 'react'


class LeftCategory extends React.Component {

  constructor(props){
    super(props)


    this.itemClickHandler = this.itemClickHandler.bind(this);

  }


  itemClickHandler(category, type){
    this.props.itemClickHandler(category, type)

  }



render() {
    return (
      <div className="col-lg-3 order-2 order-lg-1">
                <div className="filter-widget">
                <h2 className="fw-title">Categories</h2>
                <ul className="category-menu">
                  <li><a href="#" id="womanwear">Woman wear</a>
                    <ul className="sub-menu">
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'midi')}>Midi Dresses </a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'maxi')}>Maxi Dresses</a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'prom')}>Prom Dresses</a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'little')}>Little Black Dresses </a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('womenwear', 'mini')}>Mini Dresses</a></li>
                    </ul>
                  </li>
                  <li><a href="#" id="manwear">Man Wear</a>
                    <ul className="sub-menu">
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('menwear', 'midi')}>Midi Dresses </a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('menwear', 'max')}>Maxi Dresses</a></li>
                      <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('menwear', 'prom')}>Prom Dresses</a></li>
                    </ul></li>
                  <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('bagpurse', 'none')}  id="bags">Bags & Purses</a></li>
                  <li><a href="javascript: void(0)" onClick={() =>  this.itemClickHandler('footwear', 'none')} id="footwear">Footwear</a></li>
                </ul>
              </div>
        </div>
    );
  }
}

export default LeftCategory;
