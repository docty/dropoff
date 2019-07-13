import React from 'react'


class AvailableCourse extends React.Component {


  constructor(props){
    super(props);

    this.state = ({
      course : []
    });
    this.onRegisterHandler = this.onRegisterHandler.bind(this);
  }




componentDidMount() {
  axios.get('/course').then((response) => {

    this.setState({
      course : response.data
    });
  })
  .catch(function (error){
    console.log(error);
  });
}

  onRegisterHandler (e) {


  const c = this.state.course.filter(item => {
         return item.id !== e.id
      });
      this.setState({
        course : c
      });

      this.props.courseRegistered(e)
  }



  render() {
    const styling = {

        margin : '10px'
    };
    const itemStyle = {
        width : '100%',
        margin : '20px',
        border: '1px solid red'
    };
    return (
      <div>
          <table>
            <tbody>
              <tr>
              <th style={itemStyle}>Course</th>
              <th style={itemStyle}>Credit Hours </th>
              <th style={itemStyle} className="text-center">Action</th>
              </tr>
              {this.state.course.map(items => {
              return(  <tr key={items.id}>
                        <td style={itemStyle}>{items.name}</td>
                        <td style={itemStyle}>{items.credithours}</td>
                        <td style={itemStyle}><button onClick={() => this.onRegisterHandler(items)} style={styling}>Register</button></td>
                        </tr>
                )
            })
            }

            </tbody>
          </table>
      </div>
    );
  }
}

export default AvailableCourse;
