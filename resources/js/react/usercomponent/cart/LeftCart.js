import React from 'react'


class LeftCart extends React.Component {

  constructor(props){
    super(props);
    this.onValueChange = this.onValueChange.bind(this);

}

onValueChange(e){
this.props.onValueChange(e);

}


  render() {

    return (


      <div className="col-lg-8">
        <div className="cart-table">
          <h3>Your Cart</h3>
          <div className="cart-table-warp">
            <table>
            <thead>
              <tr>
                <th className="product-th">Product</th>
                <th className="quy-th">Quantity</th>
                <th className="size-th">Size</th>
                <th className="total-th">Price</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map((value, index) => {

              return (
                  <tr key={index}>
                      <td className="product-col">
                        <img src={"images/product/"+value.filename} alt="Product"/>
                        <div className="pc-title">
                          <h4>{value.name}</h4>
                          <p>GHC {value.price}</p>
                        </div>
                      </td>
                      <td className="quy-col">
                        <div className="quantity">
                            <div className="pro-qty">,
                            <input type="text" value={this.props.newChanges[index]==null? 1 : this.props.newChanges[index]}  name={index}  onChange={this.onValueChange}/>
                          </div>
                        </div>
                      </td>
                      <td className="size-col"><h4>Size M</h4></td>
                      <td className="size-col"><h4>{value.price * (this.props.newChanges[index]==null? 1 : this.props.newChanges[index])} </h4></td>
                </tr>
              )
              })}
              </tbody>
          </table>
          </div>
          <div className="total-cost">

            <h6>Total <span id="totalValue"></span></h6>

          </div>
        </div>
      </div>


    );
  }
}

export default LeftCart;
