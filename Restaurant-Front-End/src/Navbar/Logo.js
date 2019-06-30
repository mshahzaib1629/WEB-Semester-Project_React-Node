import React, { Component } from "react";


class logo extends Component {
  state = {};
  render() {
    return (
      <h1 className="logo">
        <img src={require('./123456.gif')}/>
        <span className="text-primary">Nafees </span>Spice & Grill
      </h1>
    )
  }
}

export default logo;
