import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const { restaurant, deleteRestaurant, postReview, deleteReview } = this.props;
    console.log('restaurant: ', restaurant)
    return (
      <div>
        <li className="restaurant-item">
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer 
            restaurant={restaurant} 
            postReview={postReview} 
            deleteReview={deleteReview} 
          />
        </li>
      </div>
    );
  }
};

export default Restaurant;
