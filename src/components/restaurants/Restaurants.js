import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
       
      const restaurants = this.props.restaurants.map((rest) => <Restaurant restaurant={rest} key={rest.id}/>)
      
    return(
      <ul>
        Restaurants Component
        {restaurants}
        
      </ul>
    );
  }
};

export default Restaurants;