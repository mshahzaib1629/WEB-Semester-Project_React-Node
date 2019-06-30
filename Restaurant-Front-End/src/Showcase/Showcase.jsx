import React, { Component } from "react";
import './Showcase.css';
class showcase extends Component {
  state = {};
  render() {
    return (
      <header id="showcase">
        <div class="showcase-content">
          <h1 class="l-heading">
            <span class="text-primary">Nafees   </span>
            Spice & Grill
          </h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptatibus debitis praesentium inventore, eum deserunt.
          </p>
          <a href="#what" id="readmore" class="btn btn-dark">
            Read More
          </a>
        </div>
      </header>
    );
  }
}

export default showcase;
