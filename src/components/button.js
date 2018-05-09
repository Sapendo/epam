import React, { Component } from 'react';
import axios from 'axios';

export default class CustomersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    }
  }

  getAllCutomers() {
    axios.get('http://localhost:4000/')
      .then(res => {
        this.setState(() => {
          return { customers: res.data };
        });
      })
      .catch(err => console.log(err));
  };

  getAllCutomers = this.getAllCutomers.bind(this);

  render() {
    const customersList = this.state.customers;
    const customersName = customersList.map((customer, index) => 
      <li key={index}>{customer.name}</li>
    );

    return (
      <div>
        <button onClick={this.getAllCutomers}>Get all customers</button>
        <ul className="customerList">
          {customersName}
        </ul>
      </div>
    )
  }
}