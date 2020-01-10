import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, deleteReview } = this.props
    
    const handleClick = () => {
      deleteReview({
        restaurantId: review.restaurantId, 
        reviewId: review.id
      })
    }

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={handleClick}> X </button>
      </div>
    );
  }

};

export default Review;
