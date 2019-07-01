import React from 'react'







class RightCategory extends React.Component {

constructor(props){
    super(props);
    this.state = {
        info : { data : []},

    }
    this.fetchData = this.fetchData.bind(this)

}

componentWillMount() {
    const query = {category: 'footwear', type:'footwear'}
    this.fetchData(query)
    
}



fetchData(query){
    axios.get('api/product/'+query.category)
          .then(response => {
                this.setState({
                    info : response.data
                });
          })
          .catch(error => {
            console.log(error);
          });
}


  render() {
      this.fetchData(this.props.queryValue)
    return (
      <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
          <div className="row">
            {this.state.info.data.map(item => {
                return (<div className="col-lg-4 col-md-6" key={item.id}>
                  <div className="product-item">
                      <div className="pi-pic">
                          <div className="pi-links">
                              <a href="/category/<?php echo $product['id'].'?q='.$query ?>"><img src={'./images/product/'+item.filename} alt="Product"/></a>
                              <a className="add-card"><i className="flaticon-bag"></i>
                                    <button style={{width: '100%'}}><span>ADD TO CART</span></button>
                              </a>
                          </div>
                      </div>
                      <div className="pi-text">
                          <h6>GHC {item.price}</h6>
                          <p>{item.name} </p>
                        </div>
                    </div>
                </div>)
                })}
            </div>
        </div>
      );
  }
}

export default RightCategory;
