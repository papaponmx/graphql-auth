import React, { Component } from 'react';
import AuthForm from '../auth-form';
import mutation from '../../mutations/login';
import { graphql } from 'react-apollo';
import query from '../../queries/current_user';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] }
  }

  onSubmit({email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query}],
    }).catch( res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
      
    });
  }

  render() {
    return (
      <div>
        <h3> Login</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    )
  }
}

export default graphql(mutation)(LoginForm);
