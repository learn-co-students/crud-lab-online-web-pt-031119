import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form id="new-restaurant-form" onSubmit={this.handleSubmit}>
          <label htmlFor="new-restaurant-name">New Restaurant: </label>
          <input type="text" value={this.state.text} id="new-restaurant-name" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
