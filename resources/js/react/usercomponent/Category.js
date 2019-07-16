import React from 'react'

import Header from './home/Header'
import LeftCategory from './category/LeftCategory'
import RightCategory from './category/RightCategory'
import Footer from './home/Footer'

class Category extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      info : { data : []},
    }

    this.itemClickHandler = this.itemClickHandler.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.cartHandler = this.cartHandler.bind(this);
  }


  componentWillMount() {

      this.fetchData('footwear', 'none')

  }


  itemClickHandler(category, type) {
    this.fetchData(category, type)

  }


  fetchData(category, type){
      let query = 'api/product/'+category+'?type='+type
      axios.get(query)
            .then(response => {
              this.setState({
                  info : response.data
              });

            })
            .catch(error => {
              console.log(error);
            });
  }

cartHandler(item){

  axios.post('/addcart',{
    name: item.name,
    size : 'M',
    quantity : '1',
    price: item.price,
    filename: item.filename,
    description: item.description,
    email : 'docty@test.com'
   })
    .then(function (response){
     console.log(response.data);
    })
    .catch( function (error){
      // Describe error!
    });
}

  render() {
    return (
      <div>
        <Header/>

        	<div className="page-top-info">
        		<div className="container">
        			<h3>Category Page</h3>
        			<div className="site-pagination">
        				<p>Keep Shopping With DropOff and get more bonuses</p>
        			</div>
        		</div>
        	</div>

          <section className="category-section spad">
            <div className="container">
              <div className="row">
              <LeftCategory itemClickHandler={this.itemClickHandler}/>
              <RightCategory queryValue={this.state.info.data} cartHandler={this.cartHandler}/>

              </div>
            </div>
          </section>
          <Footer/>
      </div>
    );
  }
}

export default Category;
