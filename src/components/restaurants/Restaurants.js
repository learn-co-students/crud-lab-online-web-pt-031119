import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map((restaurant, index) => <Restaurant key={index} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />)

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;