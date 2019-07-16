import React from 'react'
import Header from './home/Header'
import Footer from './home/Footer'
import LeftCheckout from './checkout/LeftCheckout'
import RightCheckout from './checkout/RightCheckout'

class Checkout extends React.Component {

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
            <h4>Your cart</h4>
            <div className="site-pagination">
              <a href="">Home</a> /
              <a href="">Your cart</a>
            </div>
          </div>
        </div>



        <section className="checkout-section spad">
          <div className="container">
            <div className="row">
              <LeftCheckout/>
              <RightCheckout items = {this.state.data} />
            </div>
          </div>
        </section>



        <Footer/>
      </div>
    );
  }
}

export default Checkout;
