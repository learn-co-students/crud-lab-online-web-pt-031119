import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurants = () => {
    const { restaurants, deleteRestaurant, postReview, deleteReview } = this.props
    
    return (
      restaurants.map(restaurant => {
        return (
          <Restaurant 
            key={restaurant.id} 
            restaurant={restaurant} 
            deleteRestaurant={deleteRestaurant} 
            postReview={postReview}
            deleteReview={deleteReview}
          />
        )
      })
    )
  }

  render() {

    return(
      <ul className="restaurants-list">
        <h1>List of Restaurants</h1>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;