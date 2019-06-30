import React, { Component } from "react";
import "./Who.css";
class who extends Component {
  state = {};
  render() {
    return (
      <section id="who">
        <div class="who-img" />
        <div class="who-text bg-dark p-2">
          <h2 class="m-heading">
            <span class="text-primary">Who</span> We Are
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            culpa harum voluptas ratione enim consequuntur illo, atque, aut
            doloribus unde repellendus sit delectus beatae aspernatur placeat
            corrupti. Ipsa, itaque quas.
          </p>
          <h3>Our Team</h3>
          <ul class="list">
            <li>Ali Amjad: CEO</li>
            <li>Shahzaib Minhas: CFO</li>
            <li>Abdul Ahad: Lead Accountant</li>
            <li>Zain Shahid: Investment Manager</li>
            <li>Minahil Shehzad: Public Relations</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default who;
