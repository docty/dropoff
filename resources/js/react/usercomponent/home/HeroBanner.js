import React from 'react'


class HeroBanner extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }

componentWillMount() {
    axios.get('api/product/display/latest_product')
      .then(response => {
        this.setState({
          data : response.data
        });
      })
      .catch(function (error){
        console.log(error);
      });
}

  render() {
    return (
      <div>

        <section className="hero-section">
          <div className="hero-slider owl-carousel">
            <div className="hs-item set-bg" data-setbg="images/bg-2.jpg" >
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 text-white">
                    <span>New Arrivals</span>
                    <h2>readsname </h2>
                    <p>readsdescription </p>
                    <a href="#" className="site-btn sb-line">DISCOVER</a>
                    <a href="#" className="site-btn sb-white">ADD TO CART</a>
                  </div>
                </div>
                <div className="offer-card text-white">
                  <span>from</span>
                  <h3>GHC readsprice </h3>
                  <p>SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="slide-num-holder" id="snh-1"></div>
          </div>
        </section>



      <section className="features-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src="images/icons/1.png" alt="#"/>
                </div>
                <h2>Fast Secure Payments</h2>
              </div>
            </div>
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src="images/icons/2.png" alt="#"/>
                </div>
                <h2>Quality Products</h2>
              </div>
            </div>
            <div className="col-md-4 p-0 feature">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src="images/icons/3.png" alt="#"/>
                </div>
                <h2>Free & fast Delivery</h2>
              </div>
            </div>
          </div>
        </div>
      </section>


      </div>
    );
  }
}

export default HeroBanner;
