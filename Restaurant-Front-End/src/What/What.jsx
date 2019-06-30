import React, { Component } from "react";
import './What.css';


class what extends Component {
  state = {};
  render() {
    return (
      <section id="what" class="bg-light py-3">
        <div class="container">
          <h2 id="serve" class="m-heading text-center">
            <span class="text-primary">What</span> We Serve
          </h2>
          <div class="items">
            <div class="item">
              <i class="fas fa-drumstick-bite fa-2x" />
              <div>
                <h3>Chicken Petti Burger</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, voluptatum!
                </p>
              </div>
            </div>
            <div class="item">
              <i class="fas fa-fish fa-2x" />
              <div>
                <h3>Fish Burger</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, voluptatum!
                </p>
              </div>
            </div>
            <div class="item">
              <i class="fas fa-solar-panel fa-2x" />
              <div>
                <h3>Grill Burgers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, voluptatum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default what;
