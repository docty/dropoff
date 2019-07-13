import React from 'react'
import Header from './usercomponent/home/Header'

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {}

        this.onValueChange = this.onValueChange.bind(this);
        this.submitButton = this.submitButton.bind(this);
}

onValueChange(e) {
this.setState({
    [e.target.name]: e.target.value
});

}

submitButton(e){
    e.preventDefault()
    axios.post('/login',{
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response){
       console.log("successful");
      })
      .catch( function (error){
        console.log(error);
      });
    console.log(this.state);
}
  render() {
    return (
      <div>
        <Header/>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <div className="card">
                      <div className="card-header">Login</div>

                      <div className="card-body">
                          <form method="POST">


                              <div className="form-group row">
                                  <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address </label>

                                  <div className="col-md-6">
                                      <input id="email" type="email" className="form-control " name="email"  onChange={this.onValueChange} required autoFocus/>


                                  </div>
                              </div>

                              <div className="form-group row">
                                  <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password </label>

                                  <div className="col-md-6">
                                      <input id="password" type="password" className="form-control" name="password" onChange={this.onValueChange} required autoComplete="true"/>


                                  </div>
                              </div>



                              <div className="form-group row mb-0">
                                  <div className="col-md-8 offset-md-4">
                                      <button type="submit" className="btn btn-primary" onClick={this.submitButton}>
                                          Login
                                      </button>


                                          <a className="btn btn-link" href="{{ route('password.request') }}">
                                              Forgot Your Password?
                                          </a>

                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Login;
