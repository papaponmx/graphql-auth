import React, { Component } from 'react';
import AuthForm from '../auth-form';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h3> Login</h3>
        <AuthForm
        />
      </div>
    )
  }
}
