import React from 'react'


class LeftCart extends React.Component {
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
              <tr>
                <td className="product-col">
                  <img src="images/product/1.jpg" alt="Product"/>
                  <div className="pc-title">
                    <h4>Name</h4>
                    <p>GHC 120</p>
                  </div>
                </td>
                <td className="quy-col">
                  <div className="quantity">
                      <div className="pro-qty">
                      <input type="text" defaultValue="1"/>
                    </div>
                  </div>
                </td>
                <td className="size-col"><h4>Size M</h4></td>
                <td className="total-col"><h4>GHC 45</h4></td>
              </tr>
              </tbody>
          </table>
          </div>
          <div className="total-cost">
            <h6>Total <span>GHC find</span></h6>
          </div>
        </div>
      </div>

    
    );
  }
}

export default LeftCart;
