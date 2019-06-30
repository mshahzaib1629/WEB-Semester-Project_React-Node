import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import Showcase from "../Showcase/Showcase.jsx";
import What from "../What/What.jsx";
import Who from "../Who/Who.jsx";
import Services from "../Services/Services.jsx";
import Order from "../Order/Order.jsx";
class homepage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Showcase />
        <What />
        <Who />
        <Services />
        <Order />
        <Route path="#home" Component={homepage} />
      </div>
    );
  }
}

export default homepage;
