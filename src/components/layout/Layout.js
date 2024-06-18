import React, { Component } from "react";
import CustomNavBar from "./CustomNavBar";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <CustomNavBar />
        {this.props.children}
      </div>
    );
  }
}
