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

  axios.get('/getauth')
    .then(response => {
      if (response.data == "authenticated") {
          this.authenticated();
      }else{
          this.unauthenticated();
      };
    })
    .catch(function (error){
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

  authenticated (){
    console.log('authenticated');
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

  unauthenticated (){
    console.log('unauthenticated');
    let obj =  window.localStorage;

    var array = new Array();

    for (const key of Object.keys(obj)){
        array.push(JSON.parse(obj[key]));
      }

    this.setState({
      data : array
    });

  }


}

export default Cart;
