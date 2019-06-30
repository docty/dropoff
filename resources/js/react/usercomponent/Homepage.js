import React from 'react'
import Header from './home/Header'
import HeroBanner from './home/HeroBanner'
import LatestProduct from './home/LatestProduct'
import Collections from './home/Collections'
import HotestProduct from './home/HotestProduct'
import Footer from './home/Footer'

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <HeroBanner/>
        <LatestProduct/>
        <Collections/>
        <HotestProduct/>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
