import React from 'react';
import ReactDOM from 'react-dom';
import ApollloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApollloClient({
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        Auth Starter
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
