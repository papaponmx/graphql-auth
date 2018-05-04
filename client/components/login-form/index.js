import React, { Component } from 'react';
import AuthForm from '../auth-form';
import mutation from '../../mutations/login';
import { grapqhl } from 'react-apollo';

class LoginForm extends Component {
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

export default graphql(mutation)(LoginForm);
