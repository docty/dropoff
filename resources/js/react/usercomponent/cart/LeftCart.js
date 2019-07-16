import React from 'react'


class LeftCart extends React.Component {
  render() {
    let counter = 0;
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
              {this.props.items.map(value => {

              return (
                  <tr key={value.id}>
                      <td className="product-col">
                        <img src={"images/product/"+value.filename} alt="Product"/>
                        <div className="pc-title">
                          <h4>{value.name}</h4>
                          <p>GHC {value.price}</p>
                        </div>
                      </td>
                      <td className="quy-col">
                        <div className="quantity">
                            <div className="pro-qty">
                            <input type="text" defaultValue="1"/>
                          </div>
                        </div>
                      </td>
                      <td className="size-col"><h4>Size {value.size}</h4></td>
                      <td className="total-col"><h4>GHC {value.price * value.quantity}</h4></td>
                </tr>
              )
              })}
              </tbody>
          </table>
          </div>
          <div className="total-cost">
            {

              this.props.items.map(value => {
                counter = counter + value.price
            })
          }
            <h6>Total <span>GHC {counter}</span></h6>

          </div>
        </div>
      </div>


    );
  }
}

export default LeftCart;
