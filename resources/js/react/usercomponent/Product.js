import React from 'react'
import Header from './home/Header'
import Footer from './home/Footer'
//import LeftProduct from './product/LeftProduct'
import RightProduct from './product/RightProduct'






class Product extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            info :   [],
            data : [{a:"1"}, {b:"2"}]
        }

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {

        const query = new URLSearchParams(this.props.location.search)

        this.fetchData(query.get('id'), this.props.match.params.type);
    }

    fetchData(id, type){

        axios.get('/api/product/'+type+'/'+id)
          .then(response => {
              console.log(response.data.data);
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
                        <RightProduct onItemValue={this.state.info.data}/>
          			</div>
          		</div>
          	</section>
        <Footer/>
      </div>
    );
  }
}

export default Product;