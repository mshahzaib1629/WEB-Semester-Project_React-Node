import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./Admin/admin.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import Navbar from "./Navbar/Navbar.jsx";

// import total from "../public/app";

class App extends Component {
  state = {
    showSite: false
  };

  showHide = () => {
    this.setState({ showSite: !this.state.showSite });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
        
        
      </div>
    );
  }
}

export default App;
