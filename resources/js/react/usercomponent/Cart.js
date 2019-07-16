import React from 'react'
import Header from './home/Header'
import Footer from './home/Footer'
import LeftCart from './cart/LeftCart'
import RightCart from './cart/RightCart'

class Cart extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }

componentWillMount() {
  axios.get('/getcartItems')
    .then(response => {
      this.setState({
        data : response.data
      });
    })
    .catch( error => {
      console.log(error);
    });
}

  render() {
    return (
      <div>
        <Header/>
        <div className="page-top-info">
            <div className="container">
              <h4>Cart Page</h4>
              <div className="site-pagination">
                <a href="">Home</a> /
                <a href="">Cart</a> /
              </div>
            </div>
          </div>

          <section className="cart-section spad">
            <div className="container">
              <div className="row">
                <LeftCart items = {this.state.data}/>
                <RightCart/>
              </div>
            </div>
        </section>
        <Footer/>


      </div>
    );
  }
}

export default Cart;
