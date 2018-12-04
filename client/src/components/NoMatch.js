import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Header as="h1" textAlign="center">
        You Shouldn't Be Here.
        <Link to="/"> Return Home</Link>
      </Header>
    );
  }
}

export default NoMatch;

