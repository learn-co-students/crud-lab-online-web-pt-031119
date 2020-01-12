import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  showRestaurants = () => {
    const list = this.props
    return <ul> {list.restaurants.map(r => {
      // debugger
      return <li><Restaurant restaurant={r} delete={list.deleteRestaurant}/></li>
    })} </ul>
  }

  render() {
    return(
      <ul>
        {this.showRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;