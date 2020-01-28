import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const renderReviews = this.props.restaurants.map(restaurant => {
      let reviewList = this.props.reviews.filter(review => review.restaurantId === restaurant.id)
      return reviewList.map(review => {
        return(<Review review={review} />)
      })
    })

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;
