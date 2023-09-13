import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import CustomNavBar from './CustomNavBar';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <CustomNavBar />
        {/* <NavMenu /> */}
        <Container style={{paddingRight: 24, paddingLeft: 24}}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
