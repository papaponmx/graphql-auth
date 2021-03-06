import React, { Component } from 'react';
import AuthForm from '../auth-form';
import { graphql } from 'react-apollo';
import mutation from '../../mutations/signup';
import query from '../../queries/current_user';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] };
  }

  onSubmit({ email, password}) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    }).catch( res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return (
      <div  className="row">
        <h3>Sign Up</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    )
  }
}

export default graphql(mutation)(SignupForm);
