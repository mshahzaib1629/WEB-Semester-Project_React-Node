import React, { Component } from "react";
import "./Order.css";
import axios from "axios";



class order extends Component {

  state = {
    newCustomer: {
      name: "",
      mobile: "",
      address: ""
    }
  };
  
  addCustomer = () => {
    axios
      .put("http://localhost:5000/api/orders", {
        customerName: this.state.newCustomer.name,
        customerMobile: this.state.newCustomer.mobile,
        customerAddress: this.state.newCustomer.address
      })
      .then(function(customers) {
        console.log(customers.data);
        //self.setState({ doctors: doctors.data });
      });
  };

  render() {


    return (
      <section id="contact">
        <div class="contact-form bg-primary p-2">
          <h2 class="m-heading">Order Now</h2>
          <p>Please use the form below to receive</p>
          <form id="myform" name="order">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                value={this.state.newCustomer.name}
                onChange={e => {
                  let c = { name: e.target.value };
                  this.setState({ newCustomer: c });
                }}
                id="name"
                placeholder="Enter Name"

              />
            </div>
            <div class="form-group">
              <label for="phone">Enter your phone number:</label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={this.state.newCustomer.mobile}
                onChange={e => {
                  let c = { 
                    name: this.state.newCustomer.name,
                    mobile: e.target.value };

                  this.setState({ newCustomer: c });
                }}
                pattern="[0-9]{4}-[0-9]{7}"
                required
                placeholder="Format Must be 0301-4567890"
              />
            </div>
            <div class="form-group">
              <label for="message">
                Address
                <textarea
                  name="message"
                  value={this.state.newCustomer.address}
                  onChange={e => {
                    let c = { 
                      name: this.state.newCustomer.name,
                      mobile: this.state.newCustomer.mobile,
                      address: e.target.value };
                    this.setState({ newCustomer: c });
                  }}
                  id="message"
                  placeholder="Enter Delivery Address"
                />
              </label>
            </div>
            <input id="submit"  type="submit" value="submit" class="btn-dark" onClick={this.addCustomer} />




          </form>
        </div>
        <div class="map">
          <iframe
            className="image"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.525722553187!2d74.29656841463209!3d31.564628252114566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191cb1c0c356a1%3A0xe70896a16ddfee31!2sNafees+Spice+%26+Grill!5e0!3m2!1sen!2s!4v1554115230081!5m2!1sen!2s"
          />
        </div>


      </section>
    );
  }
}

export default order;
