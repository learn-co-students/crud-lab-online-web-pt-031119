import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addReview: (text,restaurantId) => dispatch({type: 'ADD_REVIEW', text: text, restaurantId:restaurantId})  
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer);
