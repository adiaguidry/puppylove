import React, { Component } from "react";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <form className="col-md-8">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" className="form-control" />
        </div>
        <button className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

export default SignUp;
