import React from 'react'


class LeftCart extends React.Component {

  constructor(props){
    super(props);
    this.counter = 0;
    this.state = {
        quantity : 1
    }

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e){

    this.setState({
      [e.target.name] : e.target.value,

    });

}


  componentDidUpdate(nextProps, nextState) {
    let counter = 0;
    this.props.items.map((value, index) => {
      counter = counter + (this.state[index] == null ? parseFloat(value.price) : parseFloat(this.state[index])*parseFloat(value.price));
    })
    console.log(counter);
    $('#totalValue').text('GHC ' + counter);
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
                            <div className="pro-qty">
                            <input type="text" defaultValue="1" id="quantity" name={index} onChange={this.onValueChange}/>
                          </div>
                        </div>
                      </td>
                      <td className="size-col"><h4>Size {value.size}</h4></td>
                      <td className="total-col" id={index}><h4>GHC { parseFloat(value.price) * (this.state[index] == null ? 1 : this.state[index]) }</h4></td>
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
