import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div  className="row">
        <form onSubmit={this.onSubmit.bind(this)}  className="col s4">
          <div  className="input-field">
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div  className="input-field">
            <label>Password</label>
            <input
              value={this.state.password}
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div  className="errors">
          {this.props.errors.map(error => <div key={error}>{error}</div>)}
        </div>
          <button  className="btn">Submit</button>
        </form>
      </div>
    )
  }
}
