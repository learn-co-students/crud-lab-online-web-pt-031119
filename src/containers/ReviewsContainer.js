import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    const { id, reviews } = this.props.restaurant
    const { postReview, deleteReview } = this.props

    return (
      <div>
        <ReviewInput restaurantId={id} postReview={postReview} />
        { reviews ? <Reviews reviews={reviews} deleteReview={deleteReview} /> : null}
      </div>
    )
  }
}

export default ReviewsContainer
