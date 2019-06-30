import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className="header-section">
        <div class="header-top">
  			   <div class="container">
  				     <div class="row">
                   <div className="col-lg-2 text-center text-lg-left">
                      <a href="/" className="site-logo">
                       <img src="images/logo.png" alt=""/>
                      </a>
                    </div>
                    <div className="col-xl-6 col-lg-5">
          						<form className="header-search-form">
          							<input type="text" placeholder="Search on dropoff ...."/>
          							<button><i className="flaticon-search"></i></button>
          						</form>
          					</div>
                    <div className="col-xl-4 col-lg-5">
          						<div className="user-panel">
          							<div className="up-item">
                          <i className="flaticon-profile"></i>
          								<a href="login">Sign In</a> | <a href="register">Create Account</a>
                        </div>
          							<div className="up-item">
          								<div className="shopping-card">
          									<i className="flaticon-bag"></i>
          									<span>5</span>
          								</div>
          								<a href="/cart">Shopping Cart</a>
          							</div>
          						</div>
          					</div>
               </div>
            </div>
          </div>
          <nav className="main-navbar">
      			<div class="container">

      				<ul className="main-menu">
      					<li><a href="/">Home</a></li>
      					<li><a href="/category">Category</a></li>
      					<li><a href="/contact">Contact</a></li>
              </ul>
      			</div>
      		</nav>

      </header>
    );
  }
}

export default Header;
