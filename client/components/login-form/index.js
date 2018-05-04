import React, { Component } from 'react';
import AuthForm from '../auth-form';
import mutation from '../../mutations/login';
import { graphql } from 'react-apollo';
import query from '../../queries/current_user';

class LoginForm extends Component {
  onSubmit({email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query}],
    });
  }

  render() {
    return (
      <div>
        <h3> Login</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    )
  }
}

export default graphql(mutation)(LoginForm);
