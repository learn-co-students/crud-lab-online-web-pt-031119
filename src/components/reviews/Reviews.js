import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() { 

  const { reviews, restaurantId, deleteReview } = this.props;
  const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId)

  const group = restaurantReviews.map((review, index) => { console.log(review)
    return <Review key={index} review={review} deleteReview={deleteReview} />
  })

    return (
      <ul>
        {group}
      </ul>
    );
  }
};

export default Reviews;



