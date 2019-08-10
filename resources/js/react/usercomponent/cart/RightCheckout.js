import React from 'react'


class RightCheckout extends React.Component {


  componentWillMount(){
    this.checkingMode();
  }
  componentDidUpdate(){
    this.checkingMode();
  }
  checkingMode(){
    if(this.props.deliveryMode == 'Free'){
      var totalValue = $('#totalValue').text();
      $('#overallTotal').text(totalValue);
    }else{
      var totalValue = $('#totalValue').text().split(' ')[1];
      var diff = totalValue - parseFloat(this.props.deliveryMode);
      $('#overallTotal').text('GHC ' + diff);
    }
  }

  render() {
    let counter = 0;
    return (
      <div className="col-lg-4 order-1 order-lg-2">
        <div className="checkout-cart">
          <h3>Your Cart</h3>
          <ul className="product-list">
             {this.props.items.map(value => {
                return (<li key={value.id}>
                  <div className="pl-thumb"><img src={"images/product/"+value.filename} alt=""/></div>
                  <h6> {value.name}</h6>
                  <p>GHC  {value.price} </p>
                </li>
              )
              })}


          </ul>
          <ul className="price-list">

            <li>Total<span id="totalValue"> </span></li>
            <li>Shipping <span>{this.props.deliveryMode}</span></li>
            <li className="total">Total<span id="overallTotal">  </span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RightCheckout;
