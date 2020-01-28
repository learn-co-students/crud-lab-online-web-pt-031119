import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const filterReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    const renderReviews = filterReviews.map(review => {
      return(<Review review={review} deleteReview={this.props.deleteReview}/>)
    })

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews
