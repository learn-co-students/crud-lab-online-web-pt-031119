import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() {
    const newRestaurant = this.props;
    // debugger
    return (
      <div>
        <li>
          {newRestaurant.restaurant.text}
          <button onClick={() => {newRestaurant.delete(newRestaurant.restaurant.id)}}> X </button>
          <ReviewsContainer restaurant={newRestaurant.restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
