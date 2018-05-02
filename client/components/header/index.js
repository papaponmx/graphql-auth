import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../../queries/current_user';

class Header extends Component {
  renderButtons(){
    const { loading, user } = this.props.data


    if (loading) {
      return <div />;
    }

    if (user) {
      return <div>Logout</div>;
    } else {
      return (
        <ul>
          <li>You are not singed in</li>
          <li></li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav>
        <div  className="nav-wrapper">
          {this.renderButtons()}
        </div>
      </nav>
    )
  }
}

export default graphql(query)(Header);
