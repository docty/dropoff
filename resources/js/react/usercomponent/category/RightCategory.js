import React from 'react'







class RightCategory extends React.Component {

constructor(props){
    super(props);
    this.cartHandler = this.cartHandler.bind(this);
}


cartHandler(item){

    this.props.cartHandler(item);
}

  render() {


    return (
      <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
          <div className="row">
            {this.props.queryValue.map(item => {
                return (<div className="col-lg-4 col-md-6" key={item.id}>
                  <div className="product-item">
                      <div className="pi-pic">
                          <a href={"/category/"+item.category+"?id="+item.id}><img src={'./images/product/'+item.filename} alt="Product"/></a>
                          <div className="pi-links">
                              <a className="add-card"><i className="flaticon-bag"></i>
                                    <button  onClick={() => this.cartHandler(item)} style={{width: '100%'}}><span>ADD TO CART</span></button>
                              </a>
                          </div>
                      </div>
                      <div className="pi-text">
                          <h6>GHC {item.price}</h6>
                          <p>{item.name} </p>
                        </div>
                    </div>
                </div>)
                })}
            </div>
        </div>
      );
  }
}

export default RightCategory;
