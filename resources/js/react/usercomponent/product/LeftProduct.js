import React from 'react'


class LeftProduct extends React.Component {
  render() {
    return (
      <div className="col-lg-6">
      	<div className="product-pic-zoom">
          {this.props.items.map(value => {
      		return(<img className="product-big-img" src={"../images/product/"+value.filename} alt="" style={{width:'80%', height: '500px'}} key={value.id}/>)
            })}
      	</div>
      	<div className="product-thumbs"  style={{overflow: 'hidden', outline: 'none'}}>
      		<div className="product-thumbs-track">
      			<div className="pt active" data-imgbigurl="../images/single-product/1.jpg"><img src="../images/single-product/thumb-1.jpg" alt=""/></div>
      			<div className="pt" data-imgbigurl="../images/single-product/2.jpg"><img src="../images/single-product/thumb-2.jpg" alt=""/></div>
      			<div className="pt" data-imgbigurl="../images/single-product/3.jpg"><img src="../images/single-product/thumb-3.jpg" alt=""/></div>
      			<div className="pt" data-imgbigurl="../images/single-product/4.jpg"><img src="../images/single-product/thumb-4.jpg" alt=""/></div>
      		</div>
      	</div>
      </div>
    );
  }
}

export default LeftProduct;
