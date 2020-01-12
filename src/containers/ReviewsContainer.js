import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    debugger
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} restaurant={this.props.restaurant}/>
      </div>
    )
  }
}

const addReview = (restaurantId, text) => {
  return {
    type: 'ADD_REVIEW',
    restaurantId: restaurantId,
    text:text
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, {addReview})(ReviewsContainer)
