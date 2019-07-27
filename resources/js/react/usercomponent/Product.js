import React from 'react'
import {connect} from 'react-redux';

import Header from './home/Header'
import Footer from './home/Footer'
import Leftroduct from './product/LeftProduct'
import RightProduct from './product/RightProduct'
import {setProductValue} from './../redux/action/index'




class Product extends React.Component {


    componentDidMount() {

        const query = new URLSearchParams(this.props.location.search)
        this.fetchData(query.get('id'), this.props.match.params.type);
    }

    fetchData(id, type){

        axios.get('/api/product/'+type+'/'+id)
          .then(response => {
             this.props.product(response.data.data)
        })
          .catch(error =>{
            console.log(error);
          });
    }

  render() {
    return (
      <div >
          <Header/>

          	<div className="page-top-info">
          		<div className="container">
          			<h4>Category Page</h4>
          			<div className="site-pagination">
          				<a href="">Home</a> /
          				<a href="">Shop</a>
          			</div>
          		</div>
          	</div>


          	<section className="product-section">
          		<div className="container">
          			<div className="back-link">
          				<a href="/category"> &lt;&lt; Back to Category</a>
          			</div>
          			<div className="row">
                         <Leftroduct items= {this.props.productClick}/>
                        <RightProduct items= {this.props.productClick}/>
          			</div>
          		</div>
          	</section>
        <Footer/>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
      product: (element) => {
          dispatch(setProductValue(element));
      }
    }
};

export const mapStateToProps = (state) => {
  return {
        productClick : state.product.clickedValues
      }
};


export default connect(mapStateToProps, mapDispatchToProps)(Product);
