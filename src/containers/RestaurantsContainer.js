import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    console.log(this.props)
    const {restaurants, addRestaurant, deleteRestaurant, postReview, deleteReview } = this.props

    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants 
          restaurants={restaurants} 
          deleteRestaurant={deleteRestaurant} 
          postReview={postReview} 
          deleteReview={deleteReview}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: ({ text }) => dispatch({type: 'ADD_RESTAURANT', text}),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id: id}),
    postReview: data => dispatch({type: 'ADD_REVIEW', review: data}),
    deleteReview: data => dispatch({type: 'DELETE_REVIEW', data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
