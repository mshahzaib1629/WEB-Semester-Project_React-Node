import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "./admin.css";

class admin extends Component {
  state = {
    orders: []
  };

  fetchOrders = () => {
    var self = this;
        axios.get("http://localhost:5000/api/orders")
        .then(function(axiosResponse){
          console.log(axiosResponse);
        self.setState({ orders: axiosResponse.data }); 
        })
  };

  handleStatus = (order) => {
    axios.put(`http://localhost:5000/api/orders/${order._id}`, {
    activeStatus: false
    } );
}

handleDelete = (order) => {
  axios.delete(`http://localhost:5000/api/orders/${order._id}`);
}

  componentDidMount(){
    this.fetchOrders();
  }

  componentDidUpdate(){
    this.fetchOrders();
  }

  render() {
    return (
      <div id="admin">
        <header style={{margin: "2em"}}>
          <h1>Welcome Admin!</h1>
        </header>
        <div className="container">
          <h3>Active Orders</h3>
        <table class="table table-hover">
            <thead>
              <tr id="tr">
                <th scope="col">Customer Name</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Address</th>
                <th scope="col">Items</th>
                <th scope="col">Bill</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                {this.state.orders.map( (order, index) => (
                  <tr key={index}>
                    <td> {order.customerName} </td>
                    <td> {order.customerMobile} </td>
                    <td> {order.customerAddress} </td>
                    <td> {order.itemList} </td>
                    <td> {order.totalBill} </td>
                    <td id="b"><button id="bi"
                            
                            onClick={() => this.handleStatus(order)} 
                            className="btn btn-success btn-sm">
                            Deliver
                        </button>
                        <button id="bi"
                            onClick={() => this.handleDelete(order)} 
                            className="btn btn-danger btn-sm">
                            Delete
                        </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default admin;
