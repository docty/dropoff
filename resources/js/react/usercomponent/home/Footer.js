import React from 'react'

class Footer extends React.Component {
  render() {
    return (
    <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>About</h2>
                <p>DropOff is an online shopping store with affordable price. It offers free delivery and high quality product.</p>

              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>ENQUIRES</h2>
                <ul>
                  <li><a href="">About Us</a></li>

                </ul>
                <ul>
                  <li><a href="">Partners</a></li>

                  <li><a href="">Support</a></li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget about-widget">
                <h2>Article</h2>
                <div className="fw-latest-post-widget">
                  <div className="lp-item">
                    <div className="lp-thumb set-bg" data-setbg="images/blog-thumbs/1.jpg"></div>
                    <div className="lp-content">
                      <h6>My Dress Style</h6>
                      <span>April 20, 2019</span>
                      <a href="#" className="readmore">Read More</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget contact-widget">
                <h2>Address</h2>
                <div className="con-info">
                  <span>C.</span>
                  <p>DropOff </p>
                </div>
                <div className="con-info">
                  <span>H.</span>
                  <p>KNUST </p>
                </div>
                <div className="con-info">
                  <span>T.</span>
                  <p>+233 24 7049 416</p>
                </div>
                <div className="con-info">
                  <span>E.</span>
                  <p>dropoff@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-links-warp">
          <div className="container">
            <div className="social-links">
              <a href="" className="instagram"><i className="fa fa-instagram"></i><span>instagram</span></a>
              <a href="" className="google-plus"><i className="fa fa-google-plus"></i><span>g+plus</span></a>
              <a href="" className="pinterest"><i className="fa fa-pinterest"></i><span>pinterest</span></a>
              <a href="" className="facebook"><i className="fa fa-facebook"></i><span>facebook</span></a>
              <a href="" className="twitter"><i className="fa fa-twitter"></i><span>twitter</span></a>
              <a href="" className="youtube"><i className="fa fa-youtube"></i><span>youtube</span></a>

            </div>


              <p className="text-white text-center mt-5">Copyright &copy; {new Date().getFullYear()} All rights reserved </p>

          </div>
        </div>
      </section>

    );
  }
}

export default Footer;
